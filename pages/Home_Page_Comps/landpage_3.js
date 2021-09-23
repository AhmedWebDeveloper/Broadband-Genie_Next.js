import React ,{useState}from 'react';
import Head from 'next/head'

const landpage_2 = () => {

const [accorData ,setaccorData] = useState([
    {heading:"Why should I  use Broadband Genie?",
    // detail:"Broadband Genie is a free, simple to use and completely independent comparison service that will help you save money on home broadband, mobile broadband,mobile, tablets and TV."},{detail1:"  Our team of experts are constantly on the hunt for the latest and greatest offers. Our comparison tables have been designed to make it effortless for you to search and buy the ideal package. And our plain-English guides and features will cut through the jargon to troubleshoot problems and explain everything you need to know about buying and using broadband.",
    //  collapseId:"#collapseOne",collapse:"collapseOne",headingId:"HeadingOne"},
    para1:"Broadband Genie is a free, simple to use and completely independent comparison service that will help you save money on home broadband,  mobile broadband,mobile, tablets and TV.",para2:"Our team of experts are constantly on the hunt for the latest and greatest offers. Our comparison tables have been designed to make it effortless for you to search and buy the ideal package. And our plain-English guides and features will cut through the jargon to troubleshoot problems and explain everything you need to know about buying and using broadband.",collapseId:"#panelsStayOpen-collapseOne",collapse:"panelsStayOpen-collapseOne",headingId:"panelsStayOpen-headingOne"},
    {heading:"How does Broadband Genie make money?",
    para1:"There is no charge for using Broadband Genie. We earn money from advertising and sales commissions, so when you find a great new deal and buy through us you're helping to support our services at no cost to yourself.",para2:"",
     collapseId:"#panelsStayOpen-collapseTwo",collapse:"panelsStayOpen-collapseTwo",headingId:"panelsStayOpen-headingTwo"},
    {heading:"Is Broadband Genie affiliated with any providers?",
    para1:"No. Broadband Genie is 100% independent and unbiased. Editorial content is free of interference and our comparison tools are designed, built and maintained by our own experts.",para2:"We work with all the providers listed on our comparison tables to ensure the information is up to date, and to bring you the latest offers. Advertising and sponsored deals appearing on Broadband Genie will always be clearly marked.",
     collapseId:"#panelsStayOpen-collapseThree",collapse:"panelsStayOpen-collapseThree",headingId:"panelsStayOpen-headingThree"},
    {heading:"Will I save money by using Broadband Genie?",
    para1:"Yes. Our service has been designed to help you find the ideal broadband service with minimum effort. And we're constantly refining the comparison tables and site features to make it as easy as possible to compare the latest offers and save money.",para2:"We also work with providers to offer exclusive special offers and save even more. You won't find these deals on any other site.",
     collapseId:"#panelsStayOpen-collapseFour",collapse:"panelsStayOpen-collapseFour",headingId:"panelsStayOpen-headingFour"},
    {heading:"Do you list every broadband provider?",
    para1:"You'll find all the major broadband ISPs which cover 95% of the market, alongside smaller providers offering specialist services. So while we don't list every single broadband ISP you will be able to find something that suits your needs at the right price.",para2:"",
     collapseId:"#panelsStayOpen-collapseFive",collapse:"panelsStayOpen-collapseFive",headingId:"panelsStayOpen-headingFive"},
    {heading:"How do you decide what order to list products in the comparison table?",
    para1:"By default the comparison tables are sorted by popularity, which is a combination of number of clicks and sales. Sponsored deals are not included in the popularity rating.",para2:"You can change the order of products instantly using the sorting options or by clicking any of the table headings.",
 collapseId:"#panelsStayOpen-collapseSix",collapse:"panelsStayOpen-collapseSix",headingId:"panelsStayOpen-headingSix"},]
    )

    const [expandorNo, setexpandorNo] = useState(null)
    // const [exp, setexp] = useState(0)
    
    const expander =(id)=>{
      setexpandorNo(String(id));
      
  console.log("Expandor----",id)
    }

    

    return (
        <>
         <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
        </Head>  
        {/* {console.log(accorData)} */}
        {/* {accorData.map((value,index)=>console.log(value.heading))} */}
        <div className="land3-background d-flex justify-content-center">
 
      <section className="land3-container">
    <div className="land3-section">
        <div className="land3-main d-flex ">


    <div className="land3-left-side">
        <div>
            <h2 className="land3-header">What you need to know <span className="land3-align-header"> about us </span></h2>
        </div>
        <div className="land3-img-parent"><img src="https://www.broadbandgenie.co.uk/img/kazaam/genie/genie-tablet.png" alt="" className="land3-img" /></div>
    </div>
 
   
    <div className="land3-right-side">
    <div className="d-flex justify-content-center d-none land3-header-parent">
            <h2 className="land3-header">What you need to know <span className="land3-align-header"> about us </span></h2>
        </div>

        
        <div className="accordion" id="accordionPanelsStayOpenExample">
    {accorData.map((value,index) => {
     return (<>

  <div className={`accordion-item`} onClick={()=>expander(index)}>

    <h2 className="accordion-header" id={value.headingId}   >
      <button className="accordion-button" type="input" data-bs-toggle="collapse"  data-bs-target={value.collapseId} aria-expanded="false"  aria-controls={value.collapse}  >

      {/* aria-expanded="false" > */}
      {value.heading}
      <div className="accordion-right-btn"><div className="expandor expandor_one"></div>
    <div className={`expandor expandor${String(index)} `}></div></div>
      </button>
    </h2>
    <div id={value.collapse} className="accordion-collapse collapse" aria-labelledby={value.headingId} >
      <div className="accordion-body">
        <span  className="para1 d-inline-block">{value.para1} </span>
         <span className="para2 d-inline-block">{value.para2} </span>

       </div>
    </div>
  </div>
 
     </>

     )
     
     })}

 

 </div>
    </div>


       </div>
       </div>   
       </section>

</div>
 <style global jsx>{`

  .expandor${expandorNo}{
   transform: rotateX(90deg);
   transition: 1s;
}

 `}</style> 
   {/* transform: ${plus ? "rotateX(90deg)":"rotateX(0deg)"} ; */}
        
        </>
    )
}

export default landpage_2
