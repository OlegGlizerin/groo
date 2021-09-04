
import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";

import { DealSectionStyled } from './DealSectionStyled';


function DealSection() {
   return (
         <DealSectionStyled>
           <button class="showDealBtn">
                 צפו בדיל
             </button>
         </DealSectionStyled>
   );
}

export { DealSection };
