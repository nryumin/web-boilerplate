import fr1 from "../../data/antikafe_inverstproject_1.json"
import fr1_img1 from "../../images/franchises/anticafe1.jpg"
import fr1_img2 from "../../images/franchises/anticafe2.jpg"
import fr1_img3 from "../../images/franchises/anticafe3.jpg"

import fr2 from "../../data/appart_hotel.json"
import fr2_img1 from "../../images/franchises/appart1.jpg"
import fr2_img2 from "../../images/franchises/appart2.jpg"
import fr2_img3 from "../../images/franchises/appart3.jpg"

import fr3 from "../../data/goszakaz.json"
import fr3_img1 from "../../images/franchises/gos.jpg"

import fr4 from "../../data/kovorking12komnat.json"
import fr4_img1 from "../../images/franchises/12comnat1.jpg"
import fr4_img2 from "../../images/franchises/12comnat2.jpg"
import fr4_img3 from "../../images/franchises/12comnat3.jpg"

import fr5 from "../../data/kovorking_inverstproject.json"

import fr6 from "../../data/secret_buyer.json"

fr1.pics = [fr1_img1,fr1_img2,fr1_img3];
fr2.pics = [fr2_img1,fr2_img2,fr2_img3];
fr3.pics = [fr3_img1];
fr4.pics = [fr4_img1,fr4_img2,fr4_img3];
fr5.pics = [];
fr6.pics = [];


let model = {franchises:[fr1,fr2,fr3,fr4,fr5,fr6]};

model.franchises.forEach((f)=>{
   f.is_invest = f.is_invest == "1";
   f.steps = f.steps.filter(s=>s)
   f.similar = f.similar.filter(s=>s)
});

export default model