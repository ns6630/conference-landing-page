import React from "react";
import "./Schedule.css";

interface ScheduleProps {
  time: string;
  title: string;
  children: React.ReactNode;
}

const Schedule: React.FC<ScheduleProps> = ({time, title, children}) => {
  return (
    <div className="schedule">
      <div className="schedule__time">{time}</div>
      <section className="schedule__body">
        <h3 className="schedule__title">{title}</h3>
        <p className="schedule__description">{children}</p>
      </section>
    </div>
  );
}

export default Schedule