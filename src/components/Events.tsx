import { ReactElement, useMemo } from "react";

type Event = {
  day: number;
  message: string;
};

type EventsProps = {
  events: Event[];
};

const Events = ({ events }: EventsProps) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const adjustedFirstDayOfMonth =
    firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const gridCells: ReactElement[] = useMemo(() => {
    const cells = [];
    for (let i = 0; i < adjustedFirstDayOfMonth; i++) {
      cells.push(
        <div
          key={`empty-${i}`}
          className="empty-cell min-h-[100px] min-w-[100px] border"
        ></div>
      );
    }

    daysArray.forEach((day) => {
      const event = events.find((e) => e.day === day);
      cells.push(
        <div
          key={day}
          className="day-cell min-h-[100px] min-w-[100px] border p-[8px]"
        >
          <div className="day-number">{day}</div>
          {event && <div className="event-message">{event.message}</div>}
        </div>
      );
    });

    return cells;
  }, [adjustedFirstDayOfMonth, daysArray, events]);

  return (
    <div className="flex justify-center mt-[20px]">
      <div className="grid grid-cols-7 lowercase border">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="day-header h-[50px] pt-[8px] font-bold text-center"
          >
            {day}
          </div>
        ))}
        {gridCells}
      </div>
    </div>
  );
};

export default Events;
