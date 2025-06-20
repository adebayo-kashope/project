let posts =[
  {
    "title": "Exploring the Hidden Beaches of Portugal",
    "content": "Portugal's coastline is filled with hidden gems. From secluded coves to dramatic cliffs, here's where you should go.",
    "post_date": "2025-04-12"
  },
  {
    "title": "How AI Is Changing the World of Design",
    "content": "Artificial Intelligence is revolutionizing design tools and workflows. Let's explore the biggest changes happening now.",
    "post_date": "2025-03-28"
  },
  {
    "title": "The Beginner's Guide to Urban Gardening",
    "content": "Start your own garden even if you live in a tiny apartment. Here are practical tips and tricks.",
    "post_date": "2025-01-15"
  },
  {
    "title": "10 Healthy Smoothie Recipes You'll Love",
    "content": "These smoothies are packed with nutrients, easy to make, and taste amazing.",
    "post_date": "2025-06-01"
  },
  {
    "title": "A Deep Dive Into Blockchain Technology",
    "content": "We unpack how blockchain works and why it matters beyond cryptocurrencies.",
    "post_date": "2025-02-22"
  },
  {
    "title": "Top 5 Hiking Trails in the Pacific Northwest",
    "content": "Nature lovers will adore these must-visit trails. Don't forget your boots!",
    "post_date": "2025-05-03"
  },
  {
    "title": "Mastering Time Management in Remote Work",
    "content": "Remote work has perks, but staying productive can be tough. Here are some helpful strategies.",
    "post_date": "2025-04-10"
  },
  {
    "title": "Why Minimalism Is the Key to Happiness",
    "content": "Less really can be more. Discover how minimalist living can improve your mental health.",
    "post_date": "2025-03-05"
  },
  {
    "title": "The Rise of Sustainable Fashion",
    "content": "Fast fashion is on its way out. Let's explore brands and habits promoting sustainability.",
    "post_date": "2025-01-27"
  },
  {
    "title": "Beginner's Guide to Investing in Stocks",
    "content": "Learn how to navigate the stock market with this straightforward guide for first-time investors.",
    "post_date": "2025-05-20"
  },
  {
    "title": "Learning Python: Tips for Absolute Beginners",
    "content": "Getting started with Python can be easy if you follow these steps and resources.",
    "post_date": "2025-02-14"
  },
  {
    "title": "The Art of Coffee Brewing at Home",
    "content": "Brewing the perfect cup of coffee doesn't have to be complicated. Here's how.",
    "post_date": "2025-06-04"
  },
  {
    "title": "Photographing Wildlife: A Field Guide",
    "content": "Capture stunning wildlife photos with these techniques and essential gear suggestions.",
    "post_date": "2025-03-19"
  },
  {
    "title": "How to Build Your Personal Brand Online",
    "content": "Your digital presence matters more than ever. Here's how to craft a compelling one.",
    "post_date": "2025-04-08"
  },
  {
    "title": "Simple Ways to Reduce Daily Stress",
    "content": "Try these small changes to make a big impact on your overall well-being.",
    "post_date": "2025-02-01"
  },
  {
    "title": "The Future of Remote Education",
    "content": "Education is evolving quickly. Here's what to expect in the next decade.",
    "post_date": "2025-01-09"
  },
  {
    "title": "Travel Hacks for Budget-Friendly Adventures",
    "content": "You can travel far without spending a fortune. These hacks will help.",
    "post_date": "2025-03-30"
  },
  {
    "title": "Why Reading Fiction Makes You Smarter",
    "content": "Fiction can enhance empathy and critical thinking. Here's the science behind it.",
    "post_date": "2025-05-17"
  },
  {
    "title": "Launching Your First Online Store",
    "content": "E-commerce is booming. Here's a step-by-step guide to getting started.",
    "post_date": "2025-04-23"
  },
  {
    "title": "Understanding the Basics of Cryptocurrency",
    "content": "What is crypto? How does it work? Here's a breakdown for beginners.",
    "post_date": "2025-06-05"
  }
];
console.log(posts)
document.getElementById("parentDiv")
for (let i = 0 ; i < posts.length; i++ ) {


    const html=`<div class="slide container"><div class="slide-content", "display:flex;"><div class="card-wrapper"><div class="card"><div class="card-content"><h2 class="name">ADEBAYO KASHOPE</h2><img src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/490581733_1361281518256044_8419143575862280624_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa1gGY3hqMMNNsGe3rOGU1L7pdYCFDxP4ReNk7BYHu9PEMPQ&oe=68430842&_nc_sid=5e03e0&_nc_cat=105" alt=""><p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus, corporis? Amet aspernatur perferendis maiores repudiandae atque quaerat ad,nulla commodi itaque vel cumque consequatur.</p><button class="openModalBtn">Open Profile Modal</button></div></div></div></div></div><div class="modal"><div class="modal-content"><span class="close">&times;</span><h2>More About ADEBAYO KASHOPE</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod fugiat explicabo sapiente maxime...</p><a href="bank/input.html">view more</a></div></div><style>.modal{display:none;position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.6)}.modal-content{background-color:#fff;margin:15% auto;padding:20px;border-radius:10px;width:80%;max-width:400px;text-align:center}.close{color:#aaa;float:right;font-size:28px;font-weight:bold;cursor:pointer}.close:hover{color:red}.card-wrapper{background:green}.slide-container{background:lime}.card{position:relative;height:365px;width:250px;border-radius:50px;background:blue;padding:3px;margin-top:30px} .form-2{display:flex;flex-direction:colunm;padding:20px}.slide-content{margin:0 40px}.card{display:flex;flex-direction:column;padding:14px}</style>`;

document.body.innerHTML += html;

window.onload = function () {
  const openButtons = document.querySelectorAll(".openModalBtn");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  openButtons.forEach((btn, index) => {
    btn.onclick = function () {
      modals[index].style.display = "block";
    };
  });

  closeButtons.forEach((btn, index) => {
    btn.onclick = function () {
      modals[index].style.display = "none";
    };
  });

  window.onclick = function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };
};





// // Toggle dark/light mode
// document.getElementById("themeToggle").addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");

//   // Save preference
//   if (document.body.classList.contains("dark-mode")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });

// // Load saved theme on page load
// window.onload = function () {
//   if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark-mode");
//   }
// };



    // const html = `<div class="slide container"><div claszs="slide-content"><div class="card-wrapper"><div class="card"><div class="card-content"><h2 class="name">ADEBAYO KASHOPE</h2><img src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/490581733_1361281518256044_8419143575862280624_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa1gGY3hqMMNNsGe3rOGU1L7pdYCFDxP4ReNk7BYHu9PEMPQ&oe=68430842&_nc_sid=5e03e0&_nc_cat=105" alt=""><p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus, corporis? Amet aspernatur perferendis maiores repudiandae atque quaerat ad,nulla commodi itaque vel cumque consequatur.</p><button class="openModalBtn">Open Profile Modal</button></div></div></div></div></div>`;

console.log(parentDiv);
}

