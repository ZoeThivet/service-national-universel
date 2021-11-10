import React from "react";
import styled from "styled-components";

export default ({ ...props }) => (
  <MailContainer {...props}>
    <svg align="center" width="20" height="20" viewBox="-2 -2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.3521 4.12968C1.12198 4.2735 0.932219 4.4735 0.800668 4.71085C0.669118 4.9482 0.600097 5.21511 0.600098 5.48648V11.8001C0.600098 12.2244 0.768669 12.6314 1.06873 12.9314C1.36878 13.2315 1.77575 13.4001 2.2001 13.4001H11.8001C12.2244 13.4001 12.6314 13.2315 12.9315 12.9314C13.2315 12.6314 13.4001 12.2244 13.4001 11.8001V5.48648C13.4001 5.21511 13.3311 4.9482 13.1995 4.71085C13.068 4.4735 12.8782 4.2735 12.6481 4.12968L7.8481 1.12968C7.59381 0.970746 7.29997 0.886475 7.0001 0.886475C6.70022 0.886475 6.40639 0.970746 6.1521 1.12968L1.3521 4.12968ZM3.4441 6.06808C3.35669 6.00977 3.25865 5.96925 3.15559 5.94883C3.05252 5.92841 2.94644 5.9285 2.8434 5.94907C2.74037 5.96965 2.64239 6.01032 2.55507 6.06876C2.46776 6.1272 2.3928 6.20227 2.3345 6.28968C2.27619 6.37709 2.23567 6.47512 2.21525 6.57819C2.19483 6.68126 2.19491 6.78734 2.21549 6.89037C2.25705 7.09846 2.37957 7.28152 2.5561 7.39928L6.5561 10.0657C6.68756 10.1534 6.84206 10.2002 7.0001 10.2002C7.15814 10.2002 7.31263 10.1534 7.4441 10.0657L11.4441 7.39928C11.6206 7.28152 11.7431 7.09846 11.7847 6.89037C11.8263 6.68228 11.7835 6.46621 11.6657 6.28968C11.5479 6.11315 11.3649 5.99063 11.1568 5.94907C10.9487 5.90752 10.7326 5.95032 10.5561 6.06808L7.0001 8.43848L3.4441 6.06808Z"
        fill="white"
      />
    </svg>
  </MailContainer>
);

const MailContainer = styled.div`
  display: flex;
  align-items: center;
  svg path {
    fill: ${({ color }) => `${color}`};
  }
`;
