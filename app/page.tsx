import { CalendarContextProvider } from "./contexts/calendarContext";
import Calendar from "./components/Calendar/Calendar";

export default function Home() {
  return (
    <CalendarContextProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-100">
        <div className="m-2 w-full shadow-xl bg-white rounded-sm border border-gray-200">
          <Calendar />
        </div>
      </main>
    </CalendarContextProvider>
  );
}
