const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data.tools));
};
const displayData = (data)=>{
    // console.log(data)
 const aiContainer =  document.getElementById('Ai-container');
data = data.slice(0, 6)
 data.forEach(singleData => {
    // console.log(singleData)
  aiContainer.innerHTML += ` <div class="col">
  <div class="card h-100">
    <img src="${singleData.image}" class="card-img-top" alt="...">
    <div class="card-body mt-3">
      <h3 class="card-text mb-3">Features</h3>
      <p> 1. ${singleData.features[0]}</p>
      <p> 2. ${singleData.features[1]}</p>
      <p> 3. ${singleData.features[2]}</p>
    </div>
    <hr>
    <div class="ms-3 d-flex justify-content-between p-3 align-items-center">
    <div>
    <h5 class="card-title">${singleData.name}</h5>
    <h6 class="opacity-75"><i class="fa-solid fa-calendar-days"></i> ${singleData.published_in} </h6>
    </div>
    <div class="text-danger w-25 border rounded-circle border-bg-danger d-flex justify-content-center ">
    <i class="fa-solid fa-arrow-right " onclick="aiDeatiels('${singleData.id}')"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
    </div>
    </div>
  </div>
</div>
  
  `;
 });
};

const aiDeatiels = id =>{ 
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => aiDisplayDeatiels(data.data));
}
const aiDisplayDeatiels = data =>{
    console.log(data)
    const aiDeatiels =  document.getElementById('aiDeatiels');
    const section = document.createElement('section');
    aiDeatiels.innerText= '';
    section.innerHTML =`
    <div class=" ">
      <h4 class="fw-bold ">${data.description}</h4>
    <div class="mt-3 d-flex ">
    <div class="me-3 border border-1 bg-light p-2 rounded text-center d-flex flex-column justify-content-center align-items-center">
     <h5>${data.pricing[0].plan}</h5>
     <h5>${data.pricing[0].price}</h5>
    </div>
    <div  class="me-3 border border-1 bg-light  p-2 rounded text-center d-flex flex-column justify-content-center align-items-center">
    <h5>${data.pricing[1].plan}</h5>
    <h5>${data.pricing[1].price}</h5>
   </div>
   <div  class="me-3 border border-1 bg-light p-2 rounded text-center d-flex flex-column justify-content-center align-items-center">
    <h5>${data.pricing[2].plan}</h5>
    <h5>${data.pricing[2].price}</h5>
   </div>
    </div>
    <div>
    <div>
    <h4>Features</h4>
    <P>. ${data.features[0]}</P>
    </div>
    </div>
    </div>
    `;
    aiDeatiels.appendChild(section);



}
loadData();