// import _ from 'lodash'
import './the_meyer_reset.css';
import './style.css';

import {create_home_page} from './create_home_page';
import {create_menu_page} from './create_menu_page';
import {create_contact_page} from './create_contact_page';

const create_my_page = (
  ()=>{

    const content=document.querySelector("#content");

    const add_active_icon=()=>{
      const _active_link = document.querySelector(".plus_icon");
  
      const _ice_cream_icon = document.createElement("span");
      _ice_cream_icon.innerHTML = `<svg style="width:15px;height:15px" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 6.05C17.25 3.22 14.89 1 12 1S6.75 3.22 6.5 6.05C5.09 6.28 4 7.5 4 9C4 10.66 5.34 12 7 12L12 22L17 12C18.66 12 20 10.66 20 9C20 7.5 18.91 6.28 17.5 6.05M12 17.53L8.89 11.31C8.95 11.26 9 11.21 9.08 11.16C9.93 11.69 10.93 12 12 12S14.07 11.69 14.92 11.16C15 11.21 15.05 11.26 15.11 11.31L12 17.53Z" />
  </svg>`;
      _active_link.appendChild(_ice_cream_icon);
    }

    const remove_previous_icon=()=>{
      const active_ice_icon=document.querySelector(".plus_icon");
      active_ice_icon.removeChild(active_ice_icon.lastChild);
    }



    const delete_current_page =()=>{
      const current_page=document.getElementById("current_div");
      const whole_page = document.getElementById("content");
      whole_page.removeChild(current_page);
      
    }
    
    // nav bar
    const create_nav = ()=>{
      const nav_section = document.createElement("div");
      nav_section.classList.add("nav_section");
        const heading = document.createElement("h1");
        heading.textContent="I LOVE ICE CREAM";
        nav_section.appendChild(heading);
    
        const nav = document.createElement("nav");
          const nav_ul =document.createElement("ul");

            const nav_item_link_1 = document.createElement("a");
              const nav_item1 = document.createElement("li");
              nav_item1.textContent=`Home`;

              nav_item1.classList.add("plus_icon");
            
              nav_item_link_1.appendChild(nav_item1);  
            nav_ul.appendChild(nav_item_link_1);

            
            const nav_item_link_2 = document.createElement("a");
              const nav_item2 = document.createElement("li");
              nav_item2.textContent=`Menu`;
              nav_item_link_2.appendChild(nav_item2);  
            nav_ul.appendChild(nav_item_link_2);
    
            const nav_item_link_3 = document.createElement("a");
              const nav_item3 = document.createElement("li");
              nav_item3.textContent=`Contact`;
              nav_item_link_3.appendChild(nav_item3);  
            nav_ul.appendChild(nav_item_link_3);
  
          nav.appendChild(nav_ul);
        nav_section.appendChild(nav);
    
      content.appendChild(nav_section);

      // We have to detect the class later
      add_active_icon();
      create_home_page();
    }  


    // This works
    function change_active_icon(){
      const active_ice_icon=document.querySelector(".plus_icon");
      if (active_ice_icon !== this)
      {

        if (this.textContent === "Home")
        {
          delete_current_page();
          create_home_page();
        } else if (this.textContent === "Menu")
        {
          delete_current_page();
          create_menu_page();
        } else if (this.textContent === "Contact")
        {
          delete_current_page();
          create_contact_page();
        } 

        remove_previous_icon();
        active_ice_icon.classList.remove("plus_icon");
        this.classList.add("plus_icon");
        add_active_icon();

      }
    }
    // This doesn't work
    // const change_active_icon=()=>{
    //   console.log(this);
    // }
    const start_control = ()=>{
      const nav_links = document.querySelectorAll("a>li");
      nav_links.forEach( item => item.addEventListener("click", change_active_icon));
    }

    return {create_nav, start_control}
  }

)();


create_my_page.create_nav();
create_my_page.start_control();


