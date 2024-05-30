// datadelivery.js

const products= [
  {
    id: 1,
    name: 'BoatAthead: Head phone',
    status: 'On Board',
    address: '123 Main Street, Anytown, USA',
    imgSrc: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072201.jpg?t=st=1715434967~exp=1715438567~hmac=6dab35d2ea3178ba050c58b8352544e4b2125e69a8fceda4db4829b8fc434b62&w=740',
    
  },
  {
    id: 2,
    name: 'Laptop',
    status: 'On Board',
    address: '456 Elm Avenue, Springfield, Canada',
    imgSrc: 'https://imgs.search.brave.com/n5_tJpZim3I9g8-9JYO04UjdJEi9xf5jQELCMpqHPi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/aWdpdGFsLWRldmlj/ZS1lbGV0cm9uaWMt/bmV0d29ya2luZy1t/ZWRpYV81Mzg3Ni0z/MTY5NS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw',
    
  },
  {
    id: 3,
    name: 'Rolex Watch',
    status: 'On Board',
    address: '789 Oak Drive, London, United Kingdom',
    imgSrc: 'https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6343.jpg?w=996',
    
  },
  {
    id: 4,
    name: 'Accurist',
    status: 'On Board',
    address: '234 Pine Street, Berlin, Germany',
    imgSrc: 'https://img.freepik.com/premium-photo/futuristic-cyborg-driving-simulation-illuminated-virtual-reality-generated-by-ai_188544-13568.jpg?w=996',
    
  },
  {
    id: 5,
    name: 'BoatAthead: Head phone 3',
    status: 'On Board',
    address: '101 Maple Lane, Sydney, Australia',
    imgSrc: 'https://img.freepik.com/free-photo/headphones-balancing-with-blue-background_23-2150271756.jpg?w=740&t=st=1709371448~exp=1709372048~hmac=7570a58e8b628151200fe17bce7c6824d4d8c137c03e4dbdee161bc7c1fe9ade',
    
  },
  {
    id: 6,
    name: 'Iphone 11 pro',
    status: 'On Board',
    address: '567 Cedar Avenue, Paris, France',
    imgSrc: 'https://img.freepik.com/free-photo/smartphones-balancing-with-blue-background_23-2150271748.jpg?w=740&t=st=1709371492~exp=1709372092~hmac=7deff364a5860fd274f3a33bf8efcfbfaf38be4ffb655aa15e3db2a28e36ba7c',
    
  },
  {
    id: 7,
    name: 'Gaming console PS5',
    status: 'On Board',
    address: '890 Birch Drive, Tokyo, Japan',
    imgSrc: 'https://img.freepik.com/premium-photo/gamepads-colored-paper-top-view-minimalism-hard-light-shade_175682-2794.jpg?w=996',
    
  },
  {
    id: 8,
    name: 'SONY Nova 3 Camera',
    status: 'On Board',
    address: '112 Spruce Lane, Rome, Italy',
    imgSrc: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101',
   
  },
  {
    id: 9,
    name: 'Lenavo slime 3',
    status: 'On Board',
    address: '345 Walnut Street, Moscow, Russia',
    imgSrc: 'https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-48567.jpg?t=st=1709372311~exp=1709375911~hmac=74b1a440a6201b867878c7c888b440a65e68e6a81108e33a974c86d33351bcea&w=740',
    
  },
  {
    id: 10,
    name: 'ASUS VivoBook',
    status: 'On Board',
    address: '678 Sycamore Avenue, Beijing, China',
    imgSrc: 'https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=996&t=st=1709372415~exp=1709373015~hmac=c8c6f2a14fbe4126f7e30729b0b0748f988402f5065551db184f097e20e3e5a7',
    
  },
  {
    id: 11,
    name: '4.5 cu. ft. Stackable Front Load Washer in Titanium with SmartBoost',
    status: 'On Board',
    address: 'Address',
    imgSrc: 'https://img.freepik.com/free-vector/washing-machine-realistic-composition-with-housework-equipment-symbols-illustration_1284-29129.jpg?t=st=1715621707~exp=1715625307~hmac=554a1dcf63e1f4f6ef3a974168e24ce4e175d19aa0c7b60af72a306836e3bdaa&w=996',
    
  },
  {
    id: 12,
    name: 'SanDisk',
    status: 'On Board',
    address: '911 Ash Drive, Rio de Janeiro, Brazil',
    imgSrc: 'https://img.freepik.com/free-vector/usb-flash-drives-illustration-3d-realistic-memory-stick-black-white-plastic-mockup_33099-588.jpg?t=st=1715621769~exp=1715625369~hmac=62fd02dacd70c6b59e58a07bf9463465d60544c0bea64a7ab5d40d61d8a1612e&w=740',
    
  },
  {
    id: 13,
    name: 'Iphone 14 ProMax',
    status: 'On Board',
    address: '1516 Chestnut Street, Cape Town, South Africa',
    imgSrc: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1715621849~exp=1715625449~hmac=2a0d91eb68b50b72db604e469a9a3f279fbebb18b843393b8a0fb30745327c4f&w=740',
   
  },
  {
    id: 14,
    name: 'Ipad pro 4',
    status: 'On Board',
    address: '1718 Hickory Avenue, New Delhi, India',
    imgSrc: 'https://img.freepik.com/premium-photo/black-new-technology-tablet-mockup-design-colorful-background_38013-1552.jpg?w=740',
    
  },
  {
    id: 15,
    name: 'LG Curve TV 45inch',
    status: 'On Board',
    address: '1919 Fir Drive, Mexico City, Mexico',
    imgSrc: 'https://img.freepik.com/free-psd/realistic-television-presentation_1310-15.jpg?t=st=1709372476~exp=1709376076~hmac=d8f5e36964cec6059187d8e474e6db97b0f45da90f08c655b44b8a024245f368&w=740',
    
  },
];

export default products;
