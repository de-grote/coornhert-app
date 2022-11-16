export type Rooster = {
  response: {
    status: number;
    message: string;
    details: string;
    eventId: number;
    startRow: number;
    endRow: number;
    totalRows: number;
    data: [
      {
        week: number;
        user: string;
        appointments: [
          Appointment & {
            status: Status[];
            actions: [
              {
                appointment: Appointment;
                status: Status[];
                allowed: boolean;
                post: string;
              }
            ];
          }
        ];
        replacements: []; // geen idee wat dit is/doet
      }
    ];
  };
};

export type Status = {
  code: number;
  nl: string;
  en: string;
};

export type Appointment = {
  start: number; // unix seconds
  end: number; // unix seconds
  cancelled: boolean;
  plannedAttendance: boolean;
  studentEnrolled: boolean;
  allowedActions: string; // altijd "none" voor student
  optional: boolean;
  attendanceOverruled: boolean;
  appointmentType: string;
  online: boolean;
  onlineLocationUrl: string | null;
  appointmentInstance: number;
  startTimeSlotName: string;
  endTimeSlotName: string;
  subjects: string[];
  groups: string[];
  locations: string[];
  teachers: string[];
  onlineTeachers: string[];
  capacity: number | null;
  expectedStudentCount: number | null;
  expectedStudentCountOnline: number | null;
  changeDescription: string | null;
  schedulerRemark: string | null;
  content: string | null;
  availableSpace: number;
  id: number;
};
