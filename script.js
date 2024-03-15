// Home page all post feach link

const allPost = async (card) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts`
    );
    const data = await res.json();
    displayFuntion(data.posts);
  };
  
  // home page All post innerHTML
  
  const displayFuntion = (posts) => {
    const allPostSection = document.getElementById("all-post-setion");
    posts.forEach((card) => {
      // profile active icon
      // let activeBach = "";
      // if (card.isActive === tc) {
      //   activeBach = `<span id="active" class="badge badge-xs bg-[#30e97a] indicator-item"></span>`;
      // } else {
      //   activeBach = `<span id="active" class="badge badge-xs bg-[#dc2626] indicator-item"></span>`;
      // }
      
  
      // all post innerHtml
      const div = document.createElement("div");
      div.innerHTML = `
           <div class="flex gap-7 bg-[#f3f3f5] w-full px-4 py-7 my-7 rounded-xl">
           <div class="indicator">
           <img class="lg:w-[100px] h-[100px] rounded-[16px]" src="${card.image}" alt="">
  
           <span id="active" class="badge badge-xs ${card.isActive === true?'bg-[#30e79a]':'bg-[#dc2626]'} indicator-item"></span>
         </div>
                <div>
                
                  <div class="pb-4">
                    <div class="flex gap-2">
                      <p class="font-medium">#${card.category}</p>
                      <p class="font-medium">Athour:${card.author.name}</p>
                    </div>
                    <h1 id='text-js' class="font-medium text-2xl madimi">
                      ${card.title}
                    </h1>
                    <p class="text-gray-400">
                      ${card.description}
                    </p>
                  </div>
                  <div
                    class="flex justify-between border-t-2 border-dotted border-gray-400"
                  >
                    <div class="flex gap-8 pt-4">
                      <div class="lg:flex">
                        <img src="./images/msg.png" />
                        <p>${card.comment_count}</p>
                      </div>
    
                      <div class="lg:flex">
                      <img src="./images/i.png" alt="">
                        <p>${card.view_count}</p>
                      </div>
    
                      <div class="lg:flex">
                      <img src="./images/t.png" alt="">
                        <p>${card.posted_time}</p>
                      </div>
                    </div>
                    <div class="pt-4">
                      <button onclick="buttonHaldel('${card.title}','${card.view_count}')"><img src="./images/btbm.png" alt=""></button>
                    </div>
                  </div>
                </div>
              </div>
           `;
      // toggleButton(false);
  
      allPostSection.appendChild(div);
    });
  };
  
  // input search feach link
  const searchData = async (categoryName) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
    );
    const data = await res.json();
    const setInter=setInterval(() => {
      document.getElementById("togol-btn").classList.remove("hidden");
      clearInterval(setInter)
          },0);
    displayFuntion(data.posts);
  };
  
  // Header input funtion
  const searchHendel = () => {
    // toggleButton(true);
    setInterval(() => {
      document.getElementById("togol-btn").classList.add("hidden");
          }, 2000);
    // bayTicket();
    document.getElementById("search-filed").value = "";
    const searchFiled = document.getElementById("search-filed");
    const sechValue = searchFiled.value;
    const allPostSection = (document.getElementById("all-post-setion").innerHTML =
      "");
    searchData(sechValue);
  };
  
  // click search button then show all post section
  
  const bayTicket = () => {
    const scrll = document.getElementById("all-post-setion");
    if (scrll) {
      scrll.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Right site rendom show text and view & read post count
  
  let nbr = 0;
  const buttonHaldel = (title, view) => {
    nbr = nbr + 1;
  
    // red post count id
    document.getElementById("incres-nbr").innerText = nbr;
  
    const postTitle = document.getElementById("read-post");
    const div = document.createElement("div");
    div.className =
      "flex bg-[#ffffff] mx-3 lg:my-3 rounded-xl justify-between px-7 py-2 items-center";
    div.innerHTML = `
   <h1 class="text-lg w-[250px] font-bold">${title}</h1>
                  <p class="flex justify-center items-center gap-1"><img src="./images/i.png" alt=""> ${view}</p>`;
    postTitle.appendChild(div);
  };
  
  // buttom letest post section
  
  const letesPost = document.getElementById("letes-post");
  const leatestPostApi = async () => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
    );
    const data = await res.json();
    allPostIcon(data);
  };
  
  // buttom letest post & inner html
  
  const allPostIcon = (data) => {
    const allPosticon = document.getElementById("letes-post");
    data.forEach((card) => {
      const lastDiv = document.createElement("div");
      lastDiv.innerHTML = `
      <div class="last-post p-7 rounded-2xl mb-4">
              <img src="${card.cover_image}" alt="" />
              <div class="flex gap-5 mt-2">
                <img src="./images/calendar.png" alt="" />
                <p>${
                  card.author.posted_date
                    ? card.author.posted_date
                    : "Not Post Date"
                }</p>
              </div>
              <h1 class="text-[#12132d] font-bold mt-3">
                ${card.title}
              </h1>
              <p class="text-gray-500 mt-3">
                ${card.description}
              </p>
              <div class="flex gap-4 mt-3">
                <img class="w-[20%] rounded-full" src="${
                  card.profile_image
                }" alt="" />
                <div>
                  <h1>${card.author.name}</h1>
                  <p>${
                    card.author.designation
                      ? card.author.designation
                      : "Not Profation"
                  }</p>
                </div>
              </div>
            </div>
      `;
      allPosticon.appendChild(lastDiv);
    });
  };
  
  // loding icon settimeout
  // const toggleButton = (isloding) => {
  //   const toggleButtonLoder = document.getElementById("togol-btn");
  //   if (isloding) {
  //     setTimeout(() => {
  //       toggleButtonLoder.classList.remove("hidden");
  //     }, 5000);
  //     // toggleButtonLoder.classList.remove("hidden");
  //   }
  //   // else {
  
  //   //   // toggleButtonLoder.classList.add("hidden");
  
  //   // }
  // };
  
  leatestPostApi();
  
  allPost();
  