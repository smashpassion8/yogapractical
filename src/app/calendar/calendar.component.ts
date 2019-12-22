import { Component, OnInit, ViewChild  } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar';
// import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { OptionsInput, moment } from 'fullcalendar';
// import "fullcalendar";
import * as $ from 'jquery'; 
import { FullCalendarComponent } from '@fullcalendar/angular';

// declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  // calendarPlugins = [dayGridPlugin];
  public calendarPlugins = [dayGridPlugin, 
     interactionPlugin];
     calendarOptions: OptionsInput;

     @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;

     data = [
      {
        description : 'description for Conference',
        title       : 'Event1',
        start       : '2019-09-08',
        color       : '#57ce64'
      },
      {
        description : 'description for Conference',
        title       : 'Event2',
        start       : '2019-09-07',
        color       : '#fabb3e'
      },
      {
        description: 'description for Conference',
        title : 'Event2',
        start : '2019-09-10',
        end   : '2019-09-12',
        color : '#019efb'
      }
   ];


  constructor() {
    
   }

  handleDateClick(arg) { // handler method
      // alert(arg.dateStr);
      console.log(arg.dateStr);
    }


  calendarEvents = [
    { title: 'event 1', date: '2019-09-01' }
  ];

  addEvent1(): void {
    // this.events = [
      // ...this.events,
      // {
        // title: 'New event',
        // start: startOfDay(new Date()),
        // end: endOfDay(new Date()),
        // color: colors.red,
    //     draggable: true,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true
    //     }
    //   }
    // ];
  }

  addEvent() {
    this.calendarEvents.push(
      { title: 'event 2', date: '2019-09-11' }
    );  
  }

  modifyTitle(eventIndex, newTitle) {
    this.calendarEvents[eventIndex].title = newTitle;
  }

  ngOnInit() {
console.log("ngOnInit called");

    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events:this.data
    };

    
    setTimeout(() => {
      console.log("setTimeoutcalled");
      $("#calendar").fullCalendar({  
                      header: {
                          left   : 'prev,next today',
                          center : 'addEventButton, title',
                          right  : 'month,agendaWeek,agendaDay'
                      },
                      // titleFormat: '[Hello, World!]',
                      customButtons: {
                        addEventButton: {
                          text: 'add event...',
                          click: function() {
                            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                            var date = moment(dateStr);
                  
                            if (date.isValid()) {
                              $('#calendar').fullCalendar('renderEvent', {
                                title: 'dynamic event',
                                start: date,
                                allDay: true
                              });
                              alert('Great. Now, update your database...');
                            } else {
                              alert('Invalid date.');
                            }
                          }
                        }
                      }
                    ,
                      navLinks   : true,
                      editable   : true,
                      // eventLimit : true,
                      events: [
                          {
                              title : 'This is your',
                              start : '2019-09-03T12:30:00',
                              end : '2019-09-03T12:30:00',
                              color : '#f9c66a', // override!
                              textColor: 'rgba(255,255,255,1)',
                              backgroundColor: 'rgba(0,0,0,.5)'
                          },
                          {
                              title : 'Your meeting with john',
                              start : '2019-09-17T12:30:00',
                              end   : '2019-09-19',
                              color : "#019efb"
                          },
                          {
                              title  : 'This is Today',
                              start  : '2019-09-12T12:30:00',
                              allDay : false, // will make the time show,
                              color  : "#57cd5f"
                          }
                      ],  // request to load current events
                  });
   }, 10);

  }

}
