export enum UserRole {
  User,
  Moderator,
  Admin,
  SuperAdmin,
}

export interface AuthUser {
  _id: string;
  id: string;
  email: string;
  fullName: string;
  createdAt: Date;
}

export enum TermType {
  Quarter,
  Semester,
  Year,
}

export enum Degree {
  /* 0 */ bachelors,
  /* 1 */ bachelorsHonours,
  /* 2 */ masters,
  /* 3 */ diploma,
  /* 4 */ pgGraduateDiploma,
  /* 5 */ certificate,
  /* 6 */ pgGraduateCertificate,
  /* 7 */ awarenessAndAppreciation,
}

export enum Category {
  NONE,
  CC,
  DSE,
  AECC,
  SEC,
  GE,
  LA,
  C,
  E,
}
