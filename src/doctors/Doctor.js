// const Doctor = () => {
//     return (
//         <div>
//             <h2>Doctors available</h2>
            
//       </div>
    
//     );
//   };

// export default Doctor;

// Doctor.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const imageRoutes = [
  { imageUrl: 'https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2023/06/05053038/Find-cardiologist.jpg', route: '/cardiologist', name:'Cardiologist' },
  { imageUrl: 'https://thumbs.dreamstime.com/b/dermatologist-examines-patient-no-face-dermatologist-looks-magnifying-glass-acne-rash-problem-skin-vector-231221093.jpg', route: '/dermatologist', name:'Dermatologist' },
  { imageUrl: 'https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_3_2_crop_md/public/2022-03/Neurology.jpg?h=81b7b206&itok=whwgWPaM', route: '/neurologist', name:'Neurologist' },
  { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKqlYL0I51QO2ZIR-dqfQWKzSABsYC27JkQ&usqp=CAU', route: '/oncologist', name:'Oncologist' },
  { imageUrl: 'https://d31g6oeq0bzej7.cloudfront.net/Assets/image/jpeg/711b0d10-43ec-4f34-9733-36a58bfa7ad9.jpg', route: '/opthalmologist', name:'Opthalmologist' },
  { imageUrl: 'https://arvhospital.com/wp-content/uploads/2020/08/Orthopedic-Treatment-for-all-your-Joints-and-Bones-Problem.png', route: '/orthopedic', name:'Orthopedic' },
  { imageUrl: 'https://my.clevelandclinic.org/-/scassets/Images/org/health/articles/21716-pediatrician', route: '/pediatrician', name:'Pediatrician' },
  // ... add more objects with imageUrl and corresponding routes for all 7 images
];

const Doctor = () => {
  return (
    <div className="button-container">
      {imageRoutes.map((item, index) => (
        <div>
        <Link to={item.route} key={index} className="button-link">
          <img src={item.imageUrl} alt={`Button ${index + 1}`} />
        </Link>
        <center><p>{item.name}</p></center>
        </div>
      ))}
    </div>
  );
};

export default Doctor;