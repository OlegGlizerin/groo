
import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";

import { DealDataStyled } from './DealDataStyled';
import { DealSection } from '../DealSection/DealSection';
import { Pricing } from '../Pricing/Pricing';

function DealData({item}) {
   return (
         <DealDataStyled>
           <div class="title">
              <div class='mainTitle'>
                  {item['g:custom_label_0'][0]} 
              </div>
               <div>
                  {item['g:custom_label_1'][0]} 
              </div>
           </div>
           <p class="explanation">
               {item['g:custom_label_3'][0]} 
           </p>
           <Pricing item={item}/>
           <DealSection item={item}/>
         </DealDataStyled>
   );
}

export { DealData };
