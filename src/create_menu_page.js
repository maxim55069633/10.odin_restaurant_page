
    export const create_menu_page = ()=>{
      const menu_div=document.createElement("div");
      menu_div.setAttribute("id","current_div");
      menu_div.classList.add("menu_section");

      menu_div.innerHTML=`
            <table>
        <tr>
          <th>Product name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>strawberry ice cream</td>
          <td>$8.0</td>
        </tr>
        <tr>
          <td>chocolate & salted caramel ice cream</td>
          <td>$8.0</td>
        </tr>
        <tr>
          <td>classic sundae</td>
          <td>$8.0</td>
        </tr>
        <tr>
          <td>mango sorbet</td>
          <td>$6.0</td>
        </tr>
        <tr>
          <td>strawberry sorbet</td>
          <td>$6.0</td>
        </tr>
        <tr>
          <td>lemon & lime sorbet</td>
          <td>$6.0</td>
        </tr>
        <tr>
          <td>root beer float</td>
          <td>$2.0</td>
        </tr>
        <tr>
          <td>coffee</td>
          <td>$2.0</td>
        </tr>
        <tr>
          <td>hot milk</td>
          <td>$2.0</td>
        </tr>
        <tr>
          <td>lemonade</td>
          <td>$2.0</td>
        </tr>
      </table>`;


      const whole_page=document.querySelector("#content");
      whole_page.appendChild(menu_div);
    }

