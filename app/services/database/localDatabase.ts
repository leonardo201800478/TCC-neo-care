import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'localdb',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  (error) => {
    console.error('Error opening database', error);
  }
);

export const initializeDatabase = () => {
  db.transaction((tx) => {
    // Criação da tabela doctors
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS doctors (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        nomeUser TEXT NOT NULL,
        cpfUser INTEGER UNIQUE,
        dataNascUser TEXT NOT NULL,
        emailUser TEXT,
        foneUser INTEGER,
        cepUser INTEGER,
        ufUser TEXT,
        cidadeUser TEXT,
        bairroUser TEXT,
        logradouroUser TEXT,
        numeroUser INTEGER,
        owner_id TEXT NOT NULL,
        inserted_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );`,
      [],
      () => console.log('Table doctors created successfully'),
      (error) => console.error('Error creating table doctors', error)
    );

    // Criação da tabela patients
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS patients (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        nomepatient TEXT NOT NULL,
        cpfpatient INTEGER UNIQUE,
        dataNascpatient TEXT NOT NULL,
        emailpatient TEXT,
        fonepatient INTEGER,
        ceppatient INTEGER,
        ufpatient TEXT,
        cidadepatient TEXT,
        bairropatient TEXT,
        logradouropatient TEXT,
        numeropatient INTEGER,
        inserted_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );`,
      [],
      () => console.log('Table patients created successfully'),
      (error) => console.error('Error creating table patients', error)
    );

    // Criação da tabela consultations
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS consultations (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        patient_id TEXT NOT NULL,
        doctor_id TEXT NOT NULL,
        motivoconsultation TEXT,
        created_by TEXT,
        inserted_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (patient_id) REFERENCES patients(id),
        FOREIGN KEY (doctor_id) REFERENCES doctors(id)
      );`,
      [],
      () => console.log('Table consultations created successfully'),
      (error) => console.error('Error creating table consultations', error)
    );

    // Criação da tabela attendances
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS attendances (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        created_by TEXT,
        doctor_id TEXT NOT NULL,
        patient_id TEXT NOT NULL,
        consultation_id TEXT NOT NULL,
        hist TEXT,
        tipo TEXT NOT NULL,
        taxMae TEXT,
        pesoMae REAL,
        estaturaMae REAL,
        paMae TEXT,
        tipoSangMae TEXT,
        tax TEXT,
        apgar1 TEXT,
        apgar5 TEXT,
        peso REAL,
        comprimento REAL,
        pc REAL,
        gesta INTEGER,
        para TEXT,
        cesareas INTEGER,
        abortos INTEGER,
        abotEspon INTEGER,
        vacinasMae TEXT,
        nascVivos INTEGER,
        mortNeo INTEGER,
        filhos INTEGER,
        intern BOOLEAN,
        cirg BOOLEAN,
        quantCirg INTEGER,
        consulPre BOOLEAN,
        quantConsulPre INTEGER,
        tratMae BOOLEAN,
        descrMae TEXT,
        inserted_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (doctor_id) REFERENCES doctors(id),
        FOREIGN KEY (patient_id) REFERENCES patients(id),
        FOREIGN KEY (consultation_id) REFERENCES consultations(id)
      );`,
      [],
      () => console.log('Table attendances created successfully'),
      (error) => console.error('Error creating table attendances', error)
    );
  });
};

// Funções para inserir, atualizar e deletar dados
export const insertDoctor = (doctor) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO doctors (id, created_at, nomeUser, cpfUser, dataNascUser, emailUser, foneUser, cepUser, ufUser, cidadeUser, bairroUser, logradouroUser, numeroUser, owner_id, inserted_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
      [doctor.id, doctor.created_at, doctor.nomeUser, doctor.cpfUser, doctor.dataNascUser, doctor.emailUser, doctor.foneUser, doctor.cepUser, doctor.ufUser, doctor.cidadeUser, doctor.bairroUser, doctor.logradouroUser, doctor.numeroUser, doctor.owner_id, doctor.inserted_at, doctor.updated_at],
      () => console.log('Doctor inserted successfully'),
      (error) => console.error('Error inserting doctor', error)
    );
  });
};

export const insertPatient = (patient) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO patients (id, created_at, nomepatient, cpfpatient, dataNascpatient, emailpatient, fonepatient, ceppatient, ufpatient, cidadepatient, bairropatient, logradouropatient, numeropatient, inserted_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
      [patient.id, patient.created_at, patient.nomepatient, patient.cpfpatient, patient.dataNascpatient, patient.emailpatient, patient.fonepatient, patient.ceppatient, patient.ufpatient, patient.cidadepatient, patient.bairropatient, patient.logradouropatient, patient.numeropatient, patient.inserted_at, patient.updated_at],
      () => console.log('Patient inserted successfully'),
      (error) => console.error('Error inserting patient', error)
    );
  });
};

export const insertConsultation = (consultation) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO consultations (id, created_at, patient_id, doctor_id, motivoconsultation, created_by, inserted_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
      [consultation.id, consultation.created_at, consultation.patient_id, consultation.doctor_id, consultation.motivoconsultation, consultation.created_by, consultation.inserted_at, consultation.updated_at],
      () => console.log('Consultation inserted successfully'),
      (error) => console.error('Error inserting consultation', error)
    );
  });
};

export const insertAttendance = (attendance) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO attendances (id, created_at, created_by, doctor_id, patient_id, consultation_id, hist, tipo, taxMae, pesoMae, estaturaMae, paMae, tipoSangMae, tax, apgar1, apgar5, peso, comprimento, pc, gesta, para, cesareas, abortos, abotEspon, vacinasMae, nascVivos, mortNeo, filhos, intern, cirg, quantCirg, consulPre, quantConsulPre, tratMae, descrMae, inserted_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
      [attendance.id, attendance.created_at, attendance.created_by, attendance.doctor_id, attendance.patient_id, attendance.consultation_id, attendance.hist, attendance.tipo, attendance.taxMae, attendance.pesoMae, attendance.estaturaMae, attendance.paMae, attendance.tipoSangMae, attendance.tax, attendance.apgar1, attendance.apgar5, attendance.peso, attendance.comprimento, attendance.pc, attendance.gesta, attendance.para, attendance.cesareas, attendance.abortos, attendance.abotEspon, attendance.vacinasMae, attendance.nascVivos, attendance.mortNeo, attendance.filhos, attendance.intern, attendance.cirg, attendance.quantCirg, attendance.consulPre, attendance.quantConsulPre, attendance.tratMae, attendance.descrMae, attendance.inserted_at, attendance.updated_at],
      () => console.log('Attendance inserted successfully'),
      (error) => console.error('Error inserting attendance', error)
    );
  });
};
