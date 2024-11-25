import { useEffect, useState } from "react";
import { getEvents } from "../services/api.ts";
import type { Entity, LautisEvent } from "../libraries/types/mod.ts";

export function useEvents() {
  const [events, setEvents] = useState<Entity<LautisEvent>[]>([]);

  useEffect(() => {
    getEvents().then(
      (events) => setEvents(events),
      (e) => console.log("Ei vidu xDD", e),
    );
  }, []);

  return events;
}
