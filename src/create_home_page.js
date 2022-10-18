
import icecream_1 from './icecream_1.jpg';
import icecream_2 from './icecream_2.jpeg';
import icecream_3 from './icecream_3.jpeg';

export const create_home_page = ()=>{
    const home_div=document.createElement("div");
    home_div.setAttribute("id","current_div");
    home_div.classList.add("home_section");

      const intro_item_1 = document.createElement("div");
      intro_item_1.classList.add("intro_item");
        const image_1 = new Image();
        image_1.src = icecream_1;
        intro_item_1.appendChild(image_1);

        const description_1=document.createElement("span");
          const description_1_h2=document.createElement("h2");
          description_1_h2.textContent="CUSTOMER FIRST";
          description_1.appendChild(description_1_h2);

          const description_1_p=document.createElement("p");
          description_1_p.textContent="Select the fresh, high-quality ingredients from local partners.  Be transparent by labeling our products like “potential allergens”, “vegan certificated”.";
          description_1.appendChild(description_1_p);
        intro_item_1.appendChild(description_1);
      home_div.appendChild(intro_item_1);
      
      const intro_item_2 = document.createElement("div");
      intro_item_2.classList.add("intro_item");
      intro_item_2.classList.add("reverse_order")
        const image_2 = new Image();
        image_2.src = icecream_2;
        intro_item_2.appendChild(image_2);

        const description_2=document.createElement("span");
          const description_2_h2=document.createElement("h2");
          description_2_h2.textContent="ICE CREAM DAY";
          description_2.appendChild(description_2_h2);

          const description_2_p=document.createElement("p");
          description_2_p.textContent="Offer a 20% OFF discount on Sundays";
          description_2.appendChild(description_2_p);
        intro_item_2.appendChild(description_2);
      home_div.appendChild(intro_item_2);

      const intro_item_3 = document.createElement("div");
      intro_item_3.classList.add("intro_item");
        const image_3 = new Image();
        image_3.src = icecream_3;
        intro_item_3.appendChild(image_3);

        const description_3=document.createElement("span");
          const description_3_h2=document.createElement("h2");
          description_3_h2.textContent="AWARD";
          description_3.appendChild(description_3_h2);

          const description_3_p=document.createElement("p");
          description_3_p.textContent=`The most trustworthy ice cream in Northern China.`;
          description_3.appendChild(description_3_p);
          const description_3_p_reverse =document.createElement("p");
          description_3_p_reverse.classList.add("reverse_order");
          description_3_p_reverse.textContent=`- from the poll by Foodie Detective in 30XX`;
          description_3_p.appendChild(description_3_p_reverse);
        intro_item_3.appendChild(description_3);
      home_div.appendChild(intro_item_3);
      
    const whole_page=document.querySelector("#content");
    whole_page.appendChild(home_div);

  }
