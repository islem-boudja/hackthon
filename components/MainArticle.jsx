import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import img from '../public/img.svg'
import RelatedArticlesCard from "./card";
import ArticlePageTitles from "./Title";
function App() {
  
  return (
    <div className="flex justify-center items-center bg-[#011627] text-white">
      <div className="flex justify-center flex-col">
        <div className="mb-[41px]">
            <div className="flex gap-3 text-[24px] font-[500] mb-[10px]">
              <p>ARTICLES</p>
              <p>|</p>
              <p>Septembre 26,2023</p>
            </div>
            <div className="mb-[3px]">
              <p className="font-[700] text-[36px]">Arctic Sea Ice 6th Lowest on Record; Antarctic Sees Record Low Growth</p>
            </div>
            <div>
              <p className="font-[400] text-[20px]">By Sally Younger,NASA's Earth Science News Team</p>
            </div>
        </div>
        <div className="mb-[87px]">
          <img src={img} alt="" className=" max-w-[1585px] max-h-[812px] rounded-[48px]"/>
        </div>
        <div className="flex flex-col items-center">
          <p className="max-w-[1517px] font-[400] text-[24px] tracking-[2.4px] mb-[30px]">
            Arctic sea ice likely reached its annual minimum extent on Sept. 19, 2023, making it the sixth-lowest year in the satellite record, according to researchers at NASA and the National Snow and Ice Data Center (NSIDC). Meanwhile, Antarctic sea ice reached its lowest maximum extent on record on Sept. 10 at a time when the ice cover should have been growing at a much faster pace during the darkest and coldest months.
            Scientists track the seasonal and annual fluctuations because sea ice shapes Earth’s polar ecosystems and plays a significant role in g
            (14.62 million square kilometers) to 1.63 million square miles (4.23 million square kilometers). 
            That’s roughly 770,000 square miles (1.99 million square kilometers) below the 1981–2010 average minimum of 2.4 million square miles (6.22 million square kilometers). The amount of sea ice lost was enough to cover the entire continental United States.
            Get NASA's Climate Change News
            Sea ice around Antarctica reached its lowest winter maximum extent on Sept. 10, 2023, at 6.5 million square miles (16.96 million square kilometers). That’s 398,000 square miles (1.03 million square kilometers) below the previous record-low reached in 1986 – a difference that equates to roughly the size of Texas and California combined. The average maximum extent between 1981 and 2010 was 7.22 million square miles (18.71 million square kilometers).
          </p>
            <ArticlePageTitles title="Discover More"/>
          <p className="max-w-[1517px] font-[400] text-[24px] tracking-[2.4px]">
            Arctic sea ice likely reached its annual minimum extent on Sept. 19, 2023, making it the sixth-lowest year in the satellite record, according to researchers at NASA and the National Snow and Ice Data Center (NSIDC). Meanwhile, Antarctic sea ice reached its lowest maximum extent on record on Sept. 10 at a time when the ice cover should have been growing at a much faster pace during the darkest and coldest months.
            Scientists track the seasonal and annual fluctuations because sea ice shapes Earth’s polar ecosystems and plays a significant role in g
            (14.62 million square kilometers) to 1.63 million square miles (4.23 million square kilometers). 
            That’s roughly 770,000 square miles (1.99 million square kilometers) below the 1981–2010 average minimum of 2.4 million square miles (6.22 million square kilometers). The amount of sea ice lost was enough to cover the entire continental United States.
            Get NASA's Climate Change News
            Sea ice around Antarctica reached its lowest winter maximum extent on Sept. 10, 2023, at 6.5 million square miles (16.96 million square kilometers). That’s 398,000 square miles (1.03 million square kilometers) below the previous record-low reached in 1986 – a difference that equates to roughly the size of Texas and California combined. The average maximum extent between 1981 and 2010 was 7.22 million square miles (18.71 million square kilometers).
          </p>
          <ArticlePageTitles title="Related Articles"/>
        </div>
      </div>
      </div>
  );
}

export default App;
