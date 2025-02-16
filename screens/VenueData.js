import { act } from "react";

export const venuedata = [

  {
    id: '1',
    name: "Sportzon Wave City",
    address1: 'Sportzon, Wave City Marg, Ghaziabad, Uttar Pradesh',
    address2:'Sportzon, Wave City Marg, near NH24, Sector - 6    Ghaziabad, Uttar Pradesh  201005',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1720675247193-1696401518363-aboutTop.jpeg',
    rating: 4.5,
    timings: '6:00 AM - 10:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Seating Area",  "value": "Seating Area"},
      { "label": "Playground",  "value": "Playground"},
      { "label": "Parking",  "value": "Parking"},
      { "label": "Changing Room",  "value": "Changing Room"},
      { "label": "Restroom",  "value": "Restroom"},
    ],
    city:"Ghaziabad",
    state:"Delhi NCR",
    activities: [ { "label": "Cricket",  "value": "Cricket", icon: require('../assets/icons/cricket.png')},
      { "label": "Football",  "value": "Football", icon: require('../assets/icons/football.png')},
      { "label": "Basketball",  "value": "Basketball", icon: require('../assets/icons/basketball.png')},
      { "label": "Tennis",  "value": "Tennis", icon: require('../assets/icons/tennis.png')},
      { "label": "Speed Skating", "value": "Speed Skating", icon: require('../assets/icons/skating.png')},
    ],
    description: "Discover Sportzon Wave City, your ultimate sports haven in Wave City NH24, Ghaziabad, Uttar Pradesh. Open from 6 am to 10 pm daily, our venue offers cricket, basketball, football, tennis, martial arts, skating, and pay-and-play options. With top-notch amenities including security, washrooms, and drinking water facilities, Sportzon Wave City is where sports thrive and friendships flourish.",
  },

  {
    id: '2',
    name: "Wave City Golf Range",
    address1: 'Sector 1, Wave City, Uttar Pradesh',
    address2: 'Sector 1, Wave City, Uttar Pradesh',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1719901880363-golf%20%281%29.jpg',
    rating: 4.1,
    timings: '6:30 AM - 6:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Seating Area",  "value": "Seating Area"},
      { "label": "Playground",  "value": "Playground"},
      { "label": "Parking",  "value": "Parking"},
      { "label": "Changing Room",  "value": "Changing Room"},
    ],
    city:"Ghaziabad",
    state:"Delhi NCR",
    activities: [ { "label": "Golf",  "value": "Golf", icon: require('../assets/icons/golf.png')},],
    description: "Experience the Golf Grandeur at Wave City Golf Range.\r\nWelcome to Ghaziabad’s only Golf Range on NH-24, Wave City, Oakwood Enclave. Well-equipped with state-of-the-art golf infrastructure, this golf range is spread across 200 yards with separate 100 yards chipping and putting area. It has facilities like a 4-Hole Mini Golf Course, 16 Driving Zones, and a virtual golfing simulator.\r\nCome and indulge in World-Class Golfing at Wave City Golf Range.",
   
  },

  {
    id: '3',
    name: "Orchid International School ",
    address1: 'Sonepat,Sonipat, Haryana',
    address2:'New Braham Colony, 131001, Delhi Road, Sonepat, nearby ICICI Bank, Sonipat, Haryana 131001',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1705048731165-ER6_5776.jpg',
    rating: 5.0,
    timings: '8:00 AM - 6:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water",  "value": "Drinking Water"},],
    city: "Sonipat",
    state: "Haryana",
    activities: [
      { "label": "Football",  "value": "Football", icon: require('../assets/icons/football.png')},
      { "label": "Basketball",  "value": "Basketball", icon: require('../assets/icons/basketball.png')},
      { "label": "Table Tennis",  "value": "Table Tennis", icon: require('../assets/icons/tabletennis.png')},
      { "label": "Badminton",  "value": "Badminton", icon: require('../assets/icons/tennis.png')},
    ],
    description:'Orchid International School in Sonepat, Haryana, located at New Braham Colony, offers facilities for cricket, football, and basketball. The school features one cricket pitch, two basketball courts, and a football field. While formal programs have not started, after-school sessions for sports are planned, emphasizing the schools commitment to a well-rounded education.'
  },

  {
    id: '4',
    name: "Tattva School",
    address1: 'Bengaluru, Karnataka',
    address2:'Survey No. 70/2, Hosapalya Kumbalgodu P.O Mysore Road, opposite Pepsi Factory, Bengaluru, Karnataka 560074',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1695836907314-IMG_9414.jpg',
    rating: 5.0,
    timings: '3:00 PM - 4:30 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom", },
      { "label": "Drinking Water",  "value": "Drinking Water"},],
    city: "Bengaluru",
    state: "Karnataka",
    activities: [
      { "label": "Football",  "value": "Football", icon: require('../assets/icons/football.png')},
      { "label": "Cricket",  "value": "Cricket", icon: require('../assets/icons/cricket.png')},],
    description: 'Tattva School in Bangalore, located near the Pepsi Factory, offers a vibrant sports program with a focus on Cricket and Football. The school features three cemented cricket pitches for students to practice and play matches. Sporting activities are scheduled from 3:00 PM to 4:30 PM, Monday to Friday, promoting an active lifestyle. The strategic location adds an industrial touch to the school surroundings, creating a dynamic environment for holistic education.',
  },
  {
    id: '5',
    name: "K12 School",
    address1: 'Jaipur, Rajasthan',
    address2: "Near Sanga Automotive, Sector 35, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302029 ",
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1729581267895-k12school.png',
    rating: 3.1,
    timings: '6:00 AM - 5:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Seating Area",  "value": "Seating Area"},
      { "label": "Parking", "value": "Parking" },
      { "label": "Drinking Water", "value": "Drinking Water"},
      { "label": "Changing Room", "value": "Changing Room" },
      { "label": "Restroom", "value": "Restroom" }],
    city: "Jaipur",
    state: "Rajasthan",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') }],
    description: "K12 Sports Complex – The Ultimate Destination for Sports Enthusiasts\r\n\r\nWelcome to the K12 Sports Complex, a state-of-the-art facility designed to cater to athletes of all ages and skill levels. Whether you're looking for a place to hone your skills, play a friendly match, or host a competitive event, K12 has it all. Featuring world-class infrastructure, well-maintained courts, and expert coaches, this venue is perfect for sports enthusiasts across a wide range of activities.\r\n\r\nWith ample parking, modern amenities, and a vibrant community, K12 Sports Complex is the ideal spot for team practices, tournaments, and casual games. Book your slot today and experience the best in sports at K12!",  
  },

  {
    id: '6',
    name: "Delhi Public School International Edge",
    address1: 'Sector 50, Gurugram, Haryana',
    address2:'HS-01, Golf Course Ext Rd, Block W, South City II, Sector 50, Gurugram, Haryana 122001',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues%2F1695838021301-DaOne+%28116+of+431%29.jpg',
    rating: 5.0,
    timings: '3:45 PM - 5:15 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Parking", "value": "Parking" },
      { "label": "Drinking Water", "value": "Drinking Water"},],
    city: "Gurugram",
    state: "Haryana",
    activities: [
      {"label": "Football", "value": "Football", icon: require('../assets/icons/football.png')},
      { "label": "Table Tennis", "value": "Table Tennis", icon: require('../assets/icons/tabletennis.png')},
      { "label": "Badminton", "value": "Badminton", icon: require('../assets/icons/tennis.png')},
      { "label": "Basketball", "value": "Basketball", icon: require('../assets/icons/basketball.png')},
      { "label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png')},
      { "label": "Swimming", "value": "Swimming", icon: require('../assets/icons/cricket.png')},
      { "label": "Taekwondo", "value": "Taekwondo",icon: require('../assets/icons/cricket.png')},
      { "label": "Speed Skating", "value": "Speed Skating", icon: require('../assets/icons/skating.png')},
      { "label": "Chess", "value": "Chess", icon: require('../assets/icons/chess.png')}],
    description: 'Delhi Public Delhi Public School International Edge in Gurgaon, located at HS-01, Golf Course Ext Rd, Block W, South City II, Sector 50, Gurugram, Haryana 122001, offers a diverse sports program including Cricket, Table Tennis, Badminton, Basketball, Swimming, Taekwondo, Skating, Football, and Chess. The school provides two facilities, indoor and outdoor, for sports activities, with sessions scheduled from 3:45 to 5:15 PM on Monday, Tuesday, and Thursday. The sports program is designed for both in-school and after-school engagement, emphasizing a holistic and active educational experience.School International Edge',
  },
  {
    id: '7',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1729511334398-jbm-school.jpg',
    name: 'JBM GLOBAL SCHOOL',
    address1: 'Sector 132, Noida, Uttar Pradesh',
    address2:'Expressway, A-11, Sector 132, Noida , Uttar Pradesh 201301",',
    rating: 4.4,
    timings: '8:00 AM - 6::00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Seating Area",  "value": "Seating Area"},
      { "label": "Parking", "value": "Parking" },
      { "label": "Drinking Water", "value": "Drinking Water"},
      { "label": "Changing Room", "value": "Changing Room" },
      { "label": "Restroom", "value": "Restroom" }],    
    city: "Noida",
    state: "Uttar Pradesh",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png')}],
    description: "Located in the heart of Noida, Elite Cricket Ground (ECG) offers state-of-the-art facilities for cricket enthusiasts and professionals alike. The ground is meticulously maintained and has a lush green outfield, top-notch pitch quality, and ample space for players and spectators. With easy access from central Noida, ECG is perfect for tournaments, practice sessions, and corporate matches.\r\n\r\nWhether you want to improve your game or host a memorable event, ECG Noida provides the ideal setting with modern amenities, including parking, seating areas, and well-equipped changing rooms. Book your spot today to experience cricket at its best!",
  },

  {
    id: '8',
    name: 'Elite Cricket Ground',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1728392884245-2024-07-24.jpg',
    address1: 'Sector 150, Noida, Uttar Pradesh',
    address2:'Behind Shaheed Bhagat Singh Kranti Niketan, Sector 150, Noida, Uttar Pradesh 201310',
    rating: 4.1,
    timings: '6:00 AM - 7:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Seating Area",  "value": "Seating Area"},
      { "label": "Parking", "value": "Parking" },
      { "label": "Drinking Water", "value": "Drinking Water"},],
      city: "Noida",
    state: "Uttar Pradesh",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') }],
    description: "Located in the heart of Noida, Elite Cricket Ground (ECG) offers state-of-the-art facilities for cricket enthusiasts and professionals alike. The ground is meticulously maintained and has a lush green outfield, top-notch pitch quality, and ample space for players and spectators. With easy access from central Noida, ECG is perfect for tournaments, practice sessions, and corporate matches.\r\n\r\nWhether you want to improve your game or host a memorable event, ECG Noida provides the ideal setting with modern amenities, including parking, seating areas, and well-equipped changing rooms. Book your spot today to experience cricket at its best!",
  },

  {
    id: '9',
    name: "Eklavya Cricket Ground",
    address1: 'Sector 150, Noida, Uttar Pradesh',
    address2:'Behind Shaheed Bhagat Singh Kranti Niketan, Sector 150, Noida, Uttar Pradesh 201310',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1728391920241-1000134962.jpg',
    rating: 3.6,
    timings: '12:00 AM - 12:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Seating Area",  "value": "Seating Area"},
      { "label": "Parking", "value": "Parking" },
      { "label": "Drinking Water", "value": "Drinking Water"},],
    city: "Noida",
    state: "Uttar Pradesh",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') }],
    description:"Book Eklavya Cricket ground (ECG) in Greater Noida for your next match or event. Explore cricket facilities and reserve your spot on CricHeroes.",
   
  },

  {
    id: '10',
    name: "The Oval Cricket Ground by Sportsshala",
    address1: 'Sector 140, Noida, Uttar Pradesh',
    address2:'Sector 140, Noida, Uttar Pradesh',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1726746965312-64365.jpg',
    rating: 4.2,
    timings: '6:00 AM - 8:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Seating Area",  "value": "Seating Area"},
      { "label": "Parking", "value": "Parking" },
      { "label": "Drinking Water", "value": "Drinking Water"},
      { "label": "Refreshment", "value": "Refreshment"},
      { "label": "Changing Room", "value": "Changing Room"} ],
    city: "Noida",
    state: "Uttar Pradesh",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png')}],
    description: 'The Oval Cricket Ground by Sportsshala is a premier cricket venue designed to offer world-class facilities for players and fans alike. Located in a picturesque setting, this ground features a well-maintained pitch, lush outfield, and modern amenities, ensuring an exceptional experience for all skill levels—from casual matches to competitive tournaments.\r\n\r\nWhether you’re a cricket enthusiast looking to book practice sessions or organizing large-scale events, The Oval Cricket Ground is the perfect venue. With ample parking, seating arrangements, and professional-grade infrastructure, Sportsshala guarantees a top-tier environment for athletes and spectators.',  
  },

{
    id: '11',
    name: "East West Insitute of Technology",
    address1: 'Anjana Nagar, Bengaluru, Karnataka',
    address2: 'No. 63, East West College Road, Off, Magadi Main Rd, Vishwaneedam Post,\r\n Bharath Nagar, Anjana Nagar, Bengaluru, Karnataka 560091',
    image: 'NOT AVAILABLE',
    rating: 3.4,
    timings: '8:00 AM - 6:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},],
    city: "Bengaluru",
    state: "Karnataka",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') },
      {"label": "Football", "value": "Football", icon: require('../assets/icons/football.png') },
      {"label": "Basketball", "value": "Basketball",icon: require('../assets/icons/basketball.png') },],
    description:'East West Institute of Technology in Bangalore, located at No. 63, East West College Road, offers excellent sports facilities including cricket, football, and basketball. The campus features two cricket pitches, five cemented basketball courts, and a football field. While formal programs have not started yet, after-school sessions are planned for cricket, football, and basketball. The institute is committed to promoting a well-rounded education, encouraging physical fitness and teamwork among students.'
 },

  {
    id: '12',
    name: "St. Xaviers High School",
    address1: 'Tech Zone IV, Uttar Pradesh',
    address2:'Plot no 20 C, Tech Zone IV, Uttar Pradesh 201308',
    image: 'NOT AVAILABLE',
    rating: 4.8,
    timings: '4:00 PM - 6:30 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},],   
  
    city: "Noida",
    state: "UttarPradesh",
    activities: [ {"label": "Cricket", "value": "Cricket" , icon: require('../assets/icons/cricket.png')},],
    description: 'St. Xaviers High School, located in Greater Noida at Plot no 20 C, Tech Zone IV, Uttar Pradesh 201308, offers a comprehensive cricket facility for enthusiasts and aspiring players. The school boasts a well-equipped cricket ground with a full perimeter of around 45 meters on each side, complete with two cemented nets and two center wickets. This setup provides an ideal environment for cricket training and practice.\r\n\r\nThe cricket sessions are scheduled on Tuesday and Thursday from 4:00 PM to 6:30 PM, with additional sessions on Saturday and Sunday from 7:00 AM to 10:00 AM. The practice days are extended to Tuesday, Thursday, Friday, and Saturday. St. Xaviers High School offers a "Pay n play" system, allowing individuals to avail the cricket facilities as needed. Whether you are a student looking to enhance your skills or a cricket enthusiast seeking a quality playing field, St. Xavier High School provides an accessible and well-maintained venue for cricket enthusiasts in Greater Noida.',
  },

  {
    id: '13',
    name: "The Basecamp",
    address: 'Vasant Kunj, Delhi',
    address2:'Farm 25 A, Green Avenue Lane, Church Rd., behind Football Link, Vasant Kunj, Delhi 110070',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues%2F1705060196651-DaOne+%28160+of+353%29.jpg',
    rating: 4.5,
    timings: '4:00 PM - 7:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},
        { "label": "Parking", "value": "Parking" },],
    city: " South Delhi",
    state: "Delhi",
    description: 'Nestled in Vasant Kunj, Delhi, The Basecamp at Farm 25 A, Green Avenue Lane, Church Rd, behind Football Link, offers a dedicated space for cricket enthusiasts. Equipped with three cricket nets, this facility is perfect for honing your cricketing skills.\r\n\r\nOpen on Monday, Tuesday, and Thursday from 4:00 PM to 7:00 PM, as well as Saturday and Sunday from 7:00 AM to 10:00 AM, The Basecamp accommodates both day and night play.\r\n\r\nOperating on a convenient \"Pay n Play\" model, cricket lovers have the flexibility to enjoy the facility on weekdays and weekends. Whether you are a seasoned player or a casual enthusiast, The Basecamp provides an ideal setting to embrace the love for cricket.',
  },

  {
    id: '14',
    name: "The Dome",
    address1: 'Gurugram, Haryana 122102',
    address2:'Alahawas, Sector 59, Gurugram, Haryana 122102',
    image: 'NOT AVAILABLE',
    rating: 3.7,
    timings: '4:00 PM - 7:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},
      { "label": "Parking", "value": "Parking" },],
    city: "Gurugram",
    state: "Haryana",
    activities: [ {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png')},],
    description: 'The Dome in Gurgaon, located at Alahawas, Sector 59, Gurugram, Haryana 122102, offers three cricket grounds with a full boundary of approximately 60 meters on each side. Open for day and night play, the facility welcomes enthusiasts on weekdays (Monday, Tuesday, Thursday from 4:00 PM to 7:00 PM) and weekends (Saturday and Sunday from 7:00 AM to 10:00 AM). Operating on a \"Pay n Play\" basis, The Dome provides a premier setting for cricket lovers to enjoy state-of-the-art infrastructure and flexible scheduling.'
  },

   {
    id: '15',
    name: "Alliance International School ",
    address1: 'Rajpura, Punjab',
    address2:'Swami Vivekanand Institute of Engineering and Technology, Vill. Ramnagar, \r\nNear Banur, Teh, adj. Gian Sagar Medical College & Hospital, Rajpura, 140601',
    image: 'NOT AVAILABLE',
    rating: 3.0,
    timings: '8:00 AM - 6:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},
      { "label": "Parking", "value": "Parking" },],
    city: "Rajpura",
    state: "Punjab",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') },
      {"label": "Football", "value": "Football", icon: require('../assets/icons/football.png') },
      {"label": "Basketball", "value": "Basketball",icon: require('../assets/icons/basketball.png') },
      {"label": "Speed Skating", "value": "Speed Skating", icon: require('../assets/icons/skating.png')},
      {"label": "Table Tennis", "value": "Table Tennis", icon: require('../assets/icons/tabletennis.png') },],
    description: 'Alliance International School in Punjab, situated at Swami Vivekanand Institute of Engineering and Technology, Vill. Ramnagar, near Banur, Teh, adjacent to Gian Sagar Medical College & Hospital, Rajpura, 140601, offers a diverse sports program featuring Cricket, Basketball, Football, Skating, and Table Tennis. The school provides facilities for these sports, emphasizing active participation. While specific details about scheduled activities are not provided, the school commitment to a well-rounded education is evident through its sports offerings, which are planned for after-school hours.',  
   
  },

  {
    id: '16',
    name: "Dharav High School, Jaipur",
    address1: 'Vidyadhar Nagar, Jaipur, Rajasthan',
    address2:'ard No.-8, R-7 & S-3, Sector 2, Sector 6, Vidyadhar Nagar, Jaipur, Rajasthan 302039',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1705048807423-ER6_5776.jpg',
    rating: 4.5,
    timings: '5:00 PM - 7:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},],
    city: "Jaipur",
    state: "Rajasthan",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') },
      {"label": "Football", "value": "Football", icon: require('../assets/icons/football.png') },
      {"label": "Basketball", "value": "Basketball",icon: require('../assets/icons/basketball.png') },
      {"label": "Speed Skating", "value": "Speed Skating", icon: require('../assets/icons/skating.png')},
      {"label": "Table Tennis", "value": "Table Tennis", icon: require('../assets/icons/tabletennis.png') },
      {"label": "Karate", "value": "Karate",icon: require('../assets/icons/karate.png') },
      {"label": "Chess", "value": "Chess", icon: require('../assets/icons/chess.png') },
    ],

    description: 'Dharavi High School in Jaipur, located at Ward No.-8, R-7 & S-3, Sector 2, Sector 6, Vidyadhar Nagar, Jaipur, Rajasthan 302039, is dedicated to fostering a holistic education through its diverse sports program. \r\nThe school provides facilities for Football, Basketball, Skating, Chess, Table Tennis, Cricket, and Karate, offering students a wide array of physical activities. With one cricket pitch featuring three nets, the school emphasizes active participation in sports, conducting sessions on weekdays for various disciplines such as Cricket, Football, Basketball, Table Tennis, Skating, and Chess. The sports program is structured both within and after school hours, contributing to a well-rounded educational experience for students.',
   
  },

  {
    id: '17',
    name: "Delhi Public School Jaipur",
    address1: 'Hasampura, Rajasthan',
    address2:'NH 48, Bhakrota, Hasampura, Rajasthan 302026',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1695837437601-540127aa-8283-4025-8d2e-bf71470ce12d.jpg',
    rating: 4.1,
    timings: '8:00 AM - 6:030 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},
      { "label": "Parking", "value": "Parking" },],
    city: "Jaipur",
    state: "Rajasthan",
    activities: [
      {"label": "Badminton", "value": "Badminton",icon: require('../assets/icons/tennis.png') },
      {"label": "Football", "value": "Football",icon: require('../assets/icons/football.png') },
      {"label": "Basketball", "value": "Basketball",icon: require('../assets/icons/basketball.png') },
      {"label": "Table Tennis", "value": "Table Tennis",icon: require('../assets/icons/tabletennis.png') },],
    description:'Delhi Public School Jaipur, located in Bhakrota, Hasampura, Rajasthan, offers a robust sports program with facilities for Football, Basketball, Table Tennis, and Badminton. The school features two football fields, including one Astro Turf and three natural turf surfaces, and two spaces for indoor and outdoor games. Students can actively participate in sports during and after school hours, fostering a well-rounded educational experience.',
  },

  {
    id: '18',
    name: "Blooming Dales International School",
    address1: 'Saraswati Enclave, Gurugram, Haryana',
    address2:'Block G, Street No 2, Saraswati Enclave, Gurugram, Haryana 122006',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues%2F1705060196651-DaOne+%28160+of+353%29.jpg',
    rating: 4.5,
    timings: '4:30 PM - 6:30 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},],
    city: "Sri Ganganagar",
    state: "Rajasthan",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') },
      {"label": "Badminton", "value": "Badminton",icon: require('../assets/icons/tennis.png')  },
      {"label": "Basketball", "value": "Basketball",icon: require('../assets/icons/basketball.png')  },
      {"label": "Table Tennis", "value": "Table Tennis",icon: require('../assets/icons/tabletennis.png')  },],  
    description: "Blooming Dales International School in Sriganganagar, Rajasthan, and Gurugram, Haryana, prioritizes sports with facilities for Cricket, Table Tennis, Basketball, and Badminton. The school provides two dedicated spaces for sports activities, fostering a holistic approach to physical education. Students can enjoy sports from 4:30 to 6:30 PM, Monday to Saturday, both within and after school hours, promoting a well-rounded and active lifestyle.", 
  },

  

  {
    id: '19',
    name: "Delhi Public School Sonepat",
    address1: 'Bahalgarh,Sonipat, Haryana',
    address2:'Bahalgarh - Meerut Road, Khewra, Sonipat, Haryana 131001',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1704954832321-IMG_4439.jpg',
    rating: 5.0,
    timings: '8:00 AM - 6:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},
      { "label": "Parking", "value": "Parking" },],
    city: "Sonipat",
    state: "Haryana",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') },
      {"label": "Football", "value": "Football",icon: require('../assets/icons/football.png')  },
      {"label": "Basketball", "value": "Basketball",icon: require('../assets/icons/basketball.png')  },],
    description: "Delhi Public School Sonepat, located at Bahalgarh - Meerut Road, Khewra, Sonipat, Haryana 131001, offers top-notch sports facilities for cricket, football, and basketball enthusiasts. The school boasts two cricket pitches, four basketball courts, and a full cricket ground with a spacious boundary of around 60 meters.\r\n\r\nWith a commitment to promoting sports within its curriculum, the school provides opportunities for in-school and after-school sports activities. The well-maintained facilities encourage students to actively participate in cricket, football, and basketball, fostering physical fitness, teamwork, and a holistic learning experience at Delhi Public School Sonepat.",
   
  },

  {
    id: '20',
    name: "The Millenium School",
    address1: 'Greater Noida, Uttar Pradesh 201310',
    address2:'1, Greater Noida, Block E, Alpha I, Greater Noida, Uttar Pradesh 201310',
    image: 'https://sportzon-cdn.s3.ap-south-1.amazonaws.com/venues/1695835957665-IMG_2495.jpg',
    rating: 4.3,
    timings: '8:00 AM - 5:00 PM',
    amenities: [
      { "label": "Washroom",  "value": "Washroom"},
      { "label": "Drinking Water", "value": "Drinking Water"},],
    city: "Noida",
    state: "Uttar Pradesh",
    activities: [
      {"label": "Cricket", "value": "Cricket", icon: require('../assets/icons/cricket.png') },
      {"label": "Football", "value": "Football",icon: require('../assets/icons/football.png')  },
      {"label": "Badminton", "value": "Badminton",icon: require('../assets/icons/tennis.png')  },
      {"label": "Table Tennis", "value": "Table Tennis",icon: require('../assets/icons/tennis.png')  },],
    description: 'The Millennium School Sports Complex, Greater Noida is a sports facility that offers a variety of sports and amenities for students and the community. The complex features a turf football ground, a basketball court, 1 turf net for cricket, and table tennis and badminton courts. The complex also has drinking water facilities and washrooms.\r\n\r\nThe sports complex is available to students during school hours and to the community on Wednesdays, Thursdays, and Fridays. \r\n\r\nSports available:\r\n\r\nFootball\r\nBasketball\r\nTable Tennis\r\nBadminton\r\nNumber of grounds: 1\r\n\r\nNumber of cricket nets: 1 turf net\r\n\r\nNumber of basket ball courts: 1\r\n\r\nFacilities & Amenities:\r\n\r\nDrinking water\r\nWashrooms\r\nAvailability:\r\n\r\nWednesday, Thursday, Friday\r\nPlease note that the sports complex does not have parking facilities.\r\n\r\nThe Millennium School Sports Complex is a great place for people of all ages to enjoy sports and fitness. The complex is  well-maintained and offers a variety of amenities to make your experience enjoyable.',
  },

   
];