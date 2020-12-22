const social = [
  {url:"https://www.linkedin.com/in/artem-soroka/", class:'fa-linkedin'},
  {url: "https://www.instagram.com/marichka_and_tyoma/", class: 'fa-instagram' },
  {url: "https://www.reddit.com/user/nevtemu", class: 'fa-reddit'},
  {url: "https://github.com/nevtemu", class: 'fa-github'},
  {url: "https://twitter.com/artem_soroka_", class: 'fa-twitter'},
  ]
const containers = [
  {name: "School tests for my daughters", cards:[
    ["Arabic for Y1", "ara2", "Year 1", "Translation test", "for basic words", "from English to Arabic"],
    ["Arabic for Y2", "ara3","Year 2", "Arabic words translation", "test with randomly", "generated wrong answers"],
    ["English for Y1", "eng","Year 1", "Basic spelling", "words in English", "for first grade"],
    ["English for Y2", "eng2","Year 2", "Full list of", "spelling words", "in English"],
    ["English", "eng4","General", "This test contains", "17000 english", "words for spelling"],
    ["Time", "time","Year 1", "Select from drop", "down the time", "displayed on the clock"],
    ["Money", "money","Year 2", "Count total", "amount of money", "you have"],
    ["Payment", "money2","Year 2", "Select correct amount", "of money to pay", "for displayed product"],
    ["Notes", "notes","Music", "Select correct note", "and the fret, where", "it's played on guitar"],
  ]},
  {name: "Puzzles for my wife",cards:[
    ["Square riddle", "riddle","Displayed 8 squares", "by clicking one", "change color", "of adjusted"],
    ["Sudoku", "sudoku","Generator", "of sudoku field", "with set", "difficulty"],
  ]},
  {name: "Other",cards:[
    ["API and Ajax","api","whois IP", "open weather", "world holidays", "Google maps"],
    ["Crew Mongo", "crew","MongoDB", "Node.js", "automatic allocation of", "crew positions"],
    ["Crew", "crew2","Version 2.0", "with more deep", "algorithm and", "current updates"],
    ["Loaders", "loader","Pure CSS", "different loaders", "some inspired", "by popular brands"],
  ]}
]
const createSocialButtons = ()=>{
  let out = '';
  social.forEach((item)=>{out+=`<a href="${item.url}"><i class="fab ${item.class} fa-1x"></i></a>`})
  document.getElementById('social').innerHTML=out
}
const createMainContent = ()=>{
  let out = '';
  let counter=1;
  for(let i=0; i<containers.length; i++){
    out+=`
      <button class="folding">${containers[i].name}<i class="fas fa-chevron-circle-up"></i></button>
        <div class="content">
          <div class="container">`
            for (let j=0; j<containers[i].cards.length; j++){
              out+=`
              <a href="./pages/${containers[i].cards[j][1]}/index.html">
                <div class="card card${counter}" style="background-image: url('./src/${containers[i].cards[j][1]}.jpg')">
                  <h2>${containers[i].cards[j][0]}</h2>
                  <div class="lapse">`
                    for (let k=2; k<containers[i].cards[j].length; k++){
                      out+=`<span>${containers[i].cards[j][k]}</span><br>`
                    }                    
              out+=`</div></div></a>`
              counter++;
            }
    out+=`</div></div>`
  }
  document.getElementById('petProjects').innerHTML=out
}
const createFoldingElements =()=>{
  let foldingItems = document.getElementsByClassName("folding");
  for (let item of foldingItems){
    item.addEventListener("click", function() {
      this.firstElementChild.classList.toggle("fa-rotate-180")
      let content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
    })
    item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";
  }
}
const fillHTML = ()=>{
  createSocialButtons();
  createMainContent();
  createFoldingElements()
}
document.addEventListener("DOMContentLoaded", fillHTML());
