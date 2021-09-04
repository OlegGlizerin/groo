
import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { PricingStyled } from './PricingStyled';

function Pricing({item}) {
   return (
         <PricingStyled>
           <div class="meta">
               <span class="location green">
                  {item['g:brand'][0]} 
               </span>
               <span class="amountBought green">
               נקנו 3+
               </span>
             </div>
              <span class="thePrice green">
                 <span className='money-1'>
                     מ- 
                 </span>
                <span className='money-2'>
                  {item['g:price'][0].split(' ')[0]} 
                 </span>
                 <span className='money-3'>
                     ₪ 
                 </span>
                 
            </span>
         </PricingStyled>
   );
}

export { Pricing };
