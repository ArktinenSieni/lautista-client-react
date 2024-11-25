import React from "react";
import type { Entity, LautisEvent } from "../../libraries/types/mod.ts";

export function Events({ events }: Props) {
  if (!events.length) {
    return <>No events</>;
  }

  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          {event.name}
        </li>
      ))}
    </ul>
  );
}

type Props = {
  events: Entity<LautisEvent>[];
};
