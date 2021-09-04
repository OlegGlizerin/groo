
import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { DealBoxStyled } from './DealBoxStyled';
import { DealData } from '../DealData/DealData';
import Card from "../Card";
import grooXml from "../../groo.xml";
import Axios from "axios";

const fs = require('fs');
var parseString = require('xml2js').parseString;

function DealBox() {
      const [json,setJson] = useState("");
      useEffect(()=>{
            Axios(grooXml).then(res => {
                  parseString(res.data, function (err, result) {
                        setJson(result)
                    });
            }); // This will have your text inside data attribute
      },[])

      console.log('xmlFile', json);

      return (
            <>
            {
                  json && <>
                              {json.channel.item.map((item, i) => {
                                    console.log('item.image_link[0]', item['g:image_link'][i]);
                                    console.log(item);
                                    return (<Card>
                                          <DealBoxStyled>
                                                <DealData item={item}/>
                                                <DealBoxStyled.Img class="productImage" imgUrl={item['g:image_link'][0]}/>
                                          </DealBoxStyled>
                                    </Card>)
                              })}
                  </>
            }
            </>
   );
}

export { DealBox };
