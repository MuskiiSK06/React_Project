App.jsx

import Card from './components/Card'

function App() {

  const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzfOY3TBU9t4rpXtExyAhALrpYPvKzlyNev_ijbQ3XI92ILhBS5JPqsvN-J-usgs3-TQ&usqp=CAU",
    name: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$68/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    name: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://www.edigitalagency.com.au/wp-content/uploads/Tesla-logo-red-large-size.png",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/openai.png",
    name: "OpenAI",
    datePosted: "1 week ago",
    post: "AI Research Intern",
    tag1: "Part-time",
    tag2: "Internship",
    pay: "$50/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/054/650/807/non_2x/nvidia-logo-rounded-nvidia-logo-free-png.png",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logowik.com/content/uploads/images/adobe-experience-cloud-cc3954.jpg",
    name: "Adobe",
    datePosted: "10 weeks ago",
    post: "Web Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "Noida, India"
  }
];
  

  return (
      <div className="parent">
         {jobOpenings.map(function(elem,idx){
          return <div key={idx}>
            <Card company={elem.name} logo={elem.brandLogo} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
          </div>
         })}
      </div>  
  )
}

export default App