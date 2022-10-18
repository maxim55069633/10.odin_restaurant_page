    
    export const create_contact_page = ()=>{
        const contact=document.createElement("div");
        contact.setAttribute("id","current_div");
        contact.classList.add("contact_section");
  
        contact.innerHTML=`
        <div class="contact_item">
          <h2>Opening Hours:</h2>
          <p>Mon - Sun</p>
          <p>9:30 - 6pm</p>
        </div>
  
        <div class="contact_item">
          <h2>Address:</h2>
          <p>221b Baker St, Marylebone,</p>
          <p>London, NW1 6XE</p>
        </div>
  
        <div class="contact_item">
          <h2>Follow us:</h2>
          <p>If you have any suggestions, you can contact us via email: iloveicecream@gmail.com</p>    
          <label for="email">Enter your email here:</label>
          <input type="email" name="email" id="email"> 
          <button>Sign up for newsletter</button>
        </div>
        `;
  
        
  
        const whole_page=document.querySelector("#content");
        whole_page.appendChild(contact);
      }
  