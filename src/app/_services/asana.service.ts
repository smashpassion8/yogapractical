import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Asana } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class AsanaService {
  private baseUrl = 'http://localhost:8080/asanaCategory/getAllAsanaCategories';


  constructor(private http: HttpClient) {
    // this.baseUrl = 'http://localhost:8080/asanaCategory/getAllAsanas';
  }

  getPrimarySeriesList(): Observable<any> {
      // this.baseUrl = 'https://springboot2-jpa-crud-example.herokuapp.com/asanaCategory/getAllAsanaCategories';
      // this.baseUrl = "http://localhost:8080/yoga/findAllFlow";
      this.baseUrl = 'https://noume-ams-backend.herokuapp.com/yoga/findAllFlow';
  //   this.http.get(`${this.baseUrl}`).subscribe(
  //     data => {
  //       // this.testResponse = data;
  //       console.log("I CANT SEE DATA HERE: ", data);
  //     }
  // );
  //   console.log(this.http.get(`${this.baseUrl}`));
  //   return of([
  //     {"asanaCatId":2,"asanaCatName":"Surya Namaskar [A]","asanas":[
  //       {"asanaId":3,"asanaName":"Urdhva Vriksasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
  //       {"asanaId":4,"asanaName":"Uttanasana [A]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
  //       {"asanaId":5,"asanaName":"Uttanasana [B]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
  //       {"asanaId":6,"asanaName":"Chaturanga Dandasana","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
  //       {"asanaId":7,"asanaName":"Urdhva-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Mukha_Shvanasana.jpg"},
  //       {"asanaId":8,"asanaName":"Adho-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Adho_Mukha_Shvanasana.jpg"},
  //       {"asanaId":9,"asanaName":"Uttanasana [B]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
  //       {"asanaId":10,"asanaName":"Uttanasana [A]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
  //       {"asanaId":11,"asanaName":"Urdhva Vriksasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
  //       {"asanaId":12,"asanaName":"Samasthitih","asanaCat":null,"imageURL":"../../assets/images/Samasthitih.jpg"}]
  //     },
  //     {"asanaCatId":13,"asanaCatName":"Surya Namaskar [B]","asanas":[
  //       {"asanaId":14,"asanaName":"Utkatasana","asanaCat":null,"imageURL":"../../assets/images/Utkatasana.jpg"},
  //       {"asanaId":15,"asanaName":"Uttanasana [A]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
  //       {"asanaId":16,"asanaName":"Uttanasana [B]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
  //       {"asanaId":17,"asanaName":"Chaturanga Dandasana","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
  //       {"asanaId":18,"asanaName":"Urdhva-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Mukha_Shvanasana.jpg"},
  //       {"asanaId":19,"asanaName":"Adho-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Adho_Mukha_Shvanasana.jpg"},
  //       {"asanaId":20,"asanaName":"Virabhadrasana [A]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
  //       {"asanaId":21,"asanaName":"Chaturanga Dandasana","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
  //       {"asanaId":22,"asanaName":"Urdhva-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Mukha_Shvanasana.jpg"},
  //       {"asanaId":23,"asanaName":"Adho-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Adho_Mukha_Shvanasana.jpg"},
  //       {"asanaId":24,"asanaName":"Virabhadrasana [A]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
  //       {"asanaId":25,"asanaName":"Chaturanga Dandasana","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
  //       {"asanaId":26,"asanaName":"Urdhva-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Mukha_Shvanasana.jpg"},
  //       {"asanaId":27,"asanaName":"Adho-Mukha-Shvanasana","asanaCat":null,"imageURL":"../../assets/images/Adho_Mukha_Shvanasana.jpg"},
  //       {"asanaId":28,"asanaName":"Uttanasana [B]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
  //       {"asanaId":29,"asanaName":"Uttanasana [A]","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
  //       {"asanaId":30,"asanaName":"Utkatasana","asanaCat":null,"imageURL":"../../assets/images/Utkatasana.jpg"},
  //       {"asanaId":31,"asanaName":"Samasthitih","asanaCat":null,"imageURL":"../../assets/images/Samasthitih.jpg"}]
  //     },
  //     {"asanaCatId":32,"asanaCatName":"Fundamental Positions","asanas":[
  //       {"asanaId":33,"asanaName":"Padangushthasana","asanaCat":null,"imageURL":"../../assets/images/Padangushthasana.jpg"},
  //       {"asanaId":34,"asanaName":"Pada-Hastasana","asanaCat":null,"imageURL":"../../assets/images/Pada-Hastasana.jpg"},
  //       {"asanaId":35,"asanaName":"Utthita Trikonasana","asanaCat":null,"imageURL":"../../assets/images/Utthita Trikonasana.jpg"},
  //       {"asanaId":36,"asanaName":"Parivritta Trikonasana","asanaCat":null,"imageURL":"../../assets/images/Parivritta Trikonasana.jpg"},
  //       {"asanaId":37,"asanaName":"Utthita Parshvakonasana","asanaCat":null,"imageURL":"../../assets/images/Utthita Parshvakonasana.jpg"},
  //       {"asanaId":38,"asanaName":"Parivritta Parshvakonasana","asanaCat":null,"imageURL":"../../assets/images/Parivritta Parshvakonasana.jpg"},
  //       {"asanaId":39,"asanaName":"Prasarita Padottanasana [A]","asanaCat":null,"imageURL":"../../assets/images/Prasarita Padottanasana [A].jpg"},
  //       {"asanaId":40,"asanaName":"Prasarita Padottanasana [B]","asanaCat":null,"imageURL":"../../assets/images/Prasarita Padottanasana [B].jpg"},
  //       {"asanaId":41,"asanaName":"Prasarita Padottanasana [C]","asanaCat":null,"imageURL":"../../assets/images/Prasarita Padottanasana [C].jpg"},
  //       {"asanaId":42,"asanaName":"Prasarita Padottanasana [D]","asanaCat":null,"imageURL":"../../assets/images/Prasarita Padottanasana [D].jpg"},
  //       {"asanaId":43,"asanaName":"Parshvottanasana","asanaCat":null,"imageURL":"../../assets/images/Parshvottanasana.jpg"}]
  //     },
  //     {"asanaCatId":44,"asanaCatName":"Other Standing Asanas","asanas":[
  //       {"asanaId":45,"asanaName":"Utthita Hasta Padangushthasana","asanaCat":null,"imageURL":"../../assets/images/Utthita Hasta Padangushthasana.jpg"},
  //       {"asanaId":46,"asanaName":"Utthita Parshvasahita","asanaCat":null,"imageURL":"../../assets/images/Utthita Parshvasahita.jpg"},
  //       {"asanaId":47,"asanaName":"Utthita Hasta Padangushthasana [B]","asanaCat":null,"imageURL":"../../assets/images/Utthita Hasta Padangushthasana [B].jpg"},
  //       {"asanaId":48,"asanaName":"Ardha Baddha Padmottanasana","asanaCat":null,"imageURL":"../../assets/images/Ardha Baddha Padmottanasana.jpg"},
  //       {"asanaId":49,"asanaName":"Utkatasana","asanaCat":null,"imageURL":"../../assets/images/Utkatasana.jpg"},
  //       {"asanaId":50,"asanaName":"Virabhadrasana [A]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
  //       {"asanaId":51,"asanaName":"Virabhadrasana [B]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana [B].jpg"}]
  //     },
  //     {"asanaCatId":52,"asanaCatName":"Seating Asanas [A]","asanas":[
  //       {"asanaId":53,"asanaName":"Dandasana","asanaCat":null,"imageURL":"../../assets/images/1.jpg"},
  //       {"asanaId":54,"asanaName":"Paschimattanasana [A]","asanaCat":null,"imageURL":"../../assets/images/2.jpg"},
  //       {"asanaId":55,"asanaName":"Paschimattanasana [B]","asanaCat":null,"imageURL":"../../assets/images/3.jpg"},
  //       {"asanaId":56,"asanaName":"Paschimattanasana [C]","asanaCat":null,"imageURL":"../../assets/images/4.jpg"},
  //       {"asanaId":57,"asanaName":"Paschimattanasana [D]","asanaCat":null,"imageURL":"../../assets/images/5.jpg"},
  //       {"asanaId":58,"asanaName":"Purvatanasana","asanaCat":null,"imageURL":"../../assets/images/6.jpg"},
  //       {"asanaId":59,"asanaName":"Ardha Baddha Padma Paschimattanasana","asanaCat":null,"imageURL":"../../assets/images/7.jpg"},
  //       {"asanaId":60,"asanaName":"Triang Mukhaekapada Paschimattanasana","asanaCat":null,"imageURL":null}]
  //     },
  //     {"asanaCatId":61,"asanaCatName":"Seating Asanas [B]","asanas":[{"asanaId":62,"asanaName":"Janu Shirshasana [A]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":63,"asanaName":"Janu Shirshasana [B]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":64,"asanaName":"Janu Shirshasana [C]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":65,"asanaName":"Marichyasana [A]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":66,"asanaName":"Marichyasana [B]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":67,"asanaName":"Marichyasana [C]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":68,"asanaName":"Marichyasana [D]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":69,"asanaName":"Navasana","asanaCat":null,"imageURL":null}]},
  //     {"asanaCatId":70,"asanaCatName":"Seating Asanas [C]","asanas":[{"asanaId":71,"asanaName":"Bhujapidasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":72,"asanaName":"Kurmasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":73,"asanaName":"Supta Kurmasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":74,"asanaName":"Garbha Pindasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":75,"asanaName":"Kukkutasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":76,"asanaName":"Baddha Konasana [A]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":77,"asanaName":"Baddha Konasana [B]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":78,"asanaName":"Baddha Konasana [C]","asanaCat":null,"imageURL":null}]},
  //     {"asanaCatId":79,"asanaCatName":"Seating Asanas [D]","asanas":[{"asanaId":80,"asanaName":"Upavishta Konasana [A]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":81,"asanaName":"Upavishta Konasana [B]","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":82,"asanaName":"Supta Konasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":83,"asanaName":"Supta Padangushtasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":84,"asanaName":"Ubhaya Padangushtasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},{"asanaId":85,"asanaName":"Urdhva Mukha Paschimattanasana","asanaCat":null,"imageURL":null}]},
  //     {"asanaCatId":86,"asanaCatName":"Back Bends","asanas":[{"asanaId":87,"asanaName":"Setu Bandhasana","asanaCat":null,"imageURL":"../../assets/images/1.jpg"},{"asanaId":88,"asanaName":"Urdhva Dhanurasana","asanaCat":null,"imageURL":"../../assets/images/2.jpg"},{"asanaId":89,"asanaName":"Paschimattanasana","asanaCat":null,"imageURL":null}]},
  //     {"asanaCatId":90,"asanaCatName":"Finishing Asanas","asanas":[
  //       {"asanaId":91,"asanaName":"Shavasana","asanaCat":null,"imageURL":"../../assets/images/Shavasana.jpg"},
  //       {"asanaId":92,"asanaName":"Salamba Sarvangasana","asanaCat":null,"imageURL":"../../assets/images/Salamba Sarvangasana.jpg"},
  //       {"asanaId":93,"asanaName":"Halasana","asanaCat":null,"imageURL":"../../assets/images/Halasana.jpg"},
  //       {"asanaId":94,"asanaName":"Karna-Pidasana","asanaCat":null,"imageURL":"../../assets/images/Pidasana.jpg"},
  //       {"asanaId":95,"asanaName":"Urdhva-Padmasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva-Padmasana.jpg"},
  //       {"asanaId":96,"asanaName":"Pindasana","asanaCat":null,"imageURL":"../../assets/images/Pindasana.jpg"},
  //       {"asanaId":97,"asanaName":"Matsyasana","asanaCat":null,"imageURL":"../../assets/images/Matsyasana.jpg"},
  //       {"asanaId":98,"asanaName":"Uttana Padasana","asanaCat":null,"imageURL":"../../assets/images/Uttana Padasana.jpg"},
  //       {"asanaId":99,"asanaName":"Shirshasana [A]","asanaCat":null,"imageURL":"../../assets/images/Shirshasana [A].jpg"},
  //       {"asanaId":100,"asanaName":"Shirshasana [B]","asanaCat":null,"imageURL":"../../assets/images/Shirshasana [B].jpg"},
  //       {"asanaId":101,"asanaName":"Urdhva Dandasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva Dandasana.jpg"},
  //       {"asanaId":102,"asanaName":"Balasana","asanaCat":null,"imageURL":"../../assets/images/Balasana.jpg"},
  //       {"asanaId":103,"asanaName":"Baddha Padmasana","asanaCat":null,"imageURL":"../../assets/images/Baddha Padmasana.jpg"},
  //       {"asanaId":104,"asanaName":"Yoga-Mudra","asanaCat":null,"imageURL":"../../assets/images/Yoga-Mudra.jpg"},
  //       {"asanaId":105,"asanaName":"Padmasana","asanaCat":null,"imageURL":"../../assets/images/Padmasana.jpg"},
  //       {"asanaId":106,"asanaName":"Utplutih","asanaCat":null,"imageURL":"../../assets/images/Utplutih.jpg"},
  //       {"asanaId":107,"asanaName":"Shavasana","asanaCat":null,"imageURL":"../../assets/images/Shavasana.jpg"}]
  //     }
  //   ]);
  return this.http.get(`${this.baseUrl}`);
  }

  getGravityPoseList(): Observable<any> {
    return of([
      {"asanaCatId":2,"asanaCatName":"Hamstrings","asanas":
        [
          {"asanaId":3,"asanaName":"Uttanasana","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
          {"asanaId":4,"asanaName":"Supta Padangusthasana","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
          {"asanaId":5,"asanaName":"Parsva Supta Padangusthasana","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
          {"asanaId":6,"asanaName":"Parivrtta Supta Padangusthasana","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"}
        ]
      },
      {"asanaCatId":13,"asanaCatName":"Hips","asanas":
        [
          {"asanaId":14,"asanaName":"Utthan Pristhasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
          {"asanaId":15,"asanaName":"Baddha Konasana","asanaCat":null,"imageURL":null}
        ]
      },
      {"asanaCatId":32,"asanaCatName":"Shoulders","asanas":
        [
          {"asanaId":33,"asanaName":"Wall Shoulder Stretch","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
          {"asanaId":34,"asanaName":"Adho Mukha Svanasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
          {"asanaId":35,"asanaName":"Criss Cross Stretch","asanaCat":null,"imageURL":null}
        ]
      },
      {"asanaCatId":44,"asanaCatName":"Back","asanas":
        [
          {"asanaId":45,"asanaName":"Virasana","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
          {"asanaId":46,"asanaName":"Urdhva Dhanurasana On Chair","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
          {"asanaId":47,"asanaName":"Gomukhasana","asanaCat":null,"imageURL":null}
        ]
      },
      {"asanaCatId":52,"asanaCatName":"Wrists, Twists,Ankles","asanas":
        [
          {"asanaId":53,"asanaName":"Adho Mukha Svanasana Reverse Palm","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
          {"asanaId":54,"asanaName":"Virasana On Toes","asanaCat":null,"imageURL":"../../assets/images/Virabhadrasana_A.jpg"},
          {"asanaId":55,"asanaName":"Supta Matsyendrasana","asanaCat":null,"imageURL":null}
        ]
      }
    ]);
  // return this.http.get(`${this.baseUrl}`);
  }

  getPranayamList(): Observable<any> {
    return of([
      {"asanaCatId":2,"asanaCatName":"Pranayam","asanas":
        [
          {"asanaId":3,"asanaName":"Kapalbhati","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
          {"asanaId":4,"asanaName":"Bhastrika","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
          {"asanaId":5,"asanaName":"Bahya","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
          {"asanaId":6,"asanaName":"Ujjayi","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Anulom-Vilom or Nadi Shodhana","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Bhramari","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Udgeeth","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Pranav","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"}
        ]
      }
    ]);
  // return this.http.get(`${this.baseUrl}`);
  }

  getPranayamPracticeList(): Observable<any> {
    // return of([
    //   {"asanaCatId":2,"asanaCatName":"With Mudra Set 1","asanas":
    //     [
    //       {"asanaId":3,"asanaName":"Kapalbhati + Gyan","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
    //       {"asanaId":4,"asanaName":"Bhastrika + Akash","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
    //       {"asanaId":5,"asanaName":"Bahya + Prithvi","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
    //       {"asanaId":6,"asanaName":"Ujjayi + Varun + Ashwini","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Nadi Shodhana + Vaayu","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Bhramari + Shunya","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Udgeeth + Surya","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Pranav Jal Nashak","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"}
    //     ]
    //   },
    //   {"asanaCatId":2,"asanaCatName":"With Mudra Set 2","asanas":
    //     [
    //       {"asanaId":3,"asanaName":"Kapalbhati","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
    //       {"asanaId":4,"asanaName":"Bhastrika","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
    //       {"asanaId":5,"asanaName":"Bahya","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
    //       {"asanaId":6,"asanaName":"Ujjayi","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Anulom-Vilom or Nadi Shodhana","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Bhramari","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Udgeeth","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
    //       {"asanaId":6,"asanaName":"Pranav","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"}
    //     ]
    //   }

    // ]);
  return this.http.get(`${this.baseUrl}`);
  }


  getMudraList(): Observable<any> {
    return of([
      {"asanaCatId":2,"asanaCatName":"Mudra A","asanas":
        [
          {"asanaId":3,"asanaName":"Gyan","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
          {"asanaId":4,"asanaName":"Akash","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
          {"asanaId":5,"asanaName":"Prithvi","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
          {"asanaId":6,"asanaName":"Varun","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Vaayu","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Shunya","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Surya","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Jal Shamak","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"}
        ]
      },
      {"asanaCatId":2,"asanaCatName":"Mudra B","asanas":
        [
          {"asanaId":3,"asanaName":"Vyan","asanaCat":null,"imageURL":"../../assets/images/Urdhva_Vriksasana.jpg"},
          {"asanaId":4,"asanaName":"Apan","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_A.jpg"},
          {"asanaId":5,"asanaName":"Pran","asanaCat":null,"imageURL":"../../assets/images/Uttanasana_B.jpg"},
          {"asanaId":6,"asanaName":"Apan Vayu","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Rudra","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Thumb-Pinky-Middle","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Linga","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"},
          {"asanaId":6,"asanaName":"Adi","asanaCat":null,"imageURL":"../../assets/images/Chaturanga_Dandasana.jpg"}
        ]
      }

    ]);
  // return this.http.get(`${this.baseUrl}`);
  }

  getAsana(id: number): Observable<any> {
    var asana: Asana;
    asana = new Asana();
    asana.asanaId = 3;
    asana.asanaName= "Urdhva Vriksasana";
    asana.asanaCat = null;
    //return this.http.get(`${this.baseUrl}/${id}`);
    return of(asana);
  }

}
