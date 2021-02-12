import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-events-editor',
  templateUrl: './events-editor.component.html',
  styleUrls: ['./events-editor.component.scss']
})
export class EventsEditorComponent implements OnInit {


  event?: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    const eventId = Number(this.route.snapshot.paramMap.get('id'));

    if (eventId) {
      this.eventService.get(eventId).subscribe((data: Event) => {
        this.event = data;
      });
    }

  }

  onSubmit(): void {
    if (this.event) {
      this.eventService.update(this.event);
    }

  }

}
