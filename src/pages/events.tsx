import React from "react";
import { default as EventsComponent } from "../components/events/mod.ts";
import { useEvents } from "../hooks/useEvents.ts";

export function Events() {
  const events = useEvents();

  return <EventsComponent events={events} />;
}
