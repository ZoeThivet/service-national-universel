import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Input } from "reactstrap";
import styled from "styled-components";
import { formatDay, translate, formatStringDate } from "../../../utils";
import api from "../../../services/api";
import { toastr } from "react-redux-toastr";

export default ({ structure }) => {
  return (
    <Box>
      <Row>
        <Col md={6} style={{ borderRight: "2px solid #f4f5f7" }}>
          <Wrapper>
            <Legend>La structure</Legend>

            <div className="detail">
              <div className="detail-title">Présentation</div>
              <div className="detail-text">{structure.description}</div>
            </div>
            <div className="detail">
              <div className="detail-title">Status</div>
              <div className="detail-text">{translate(structure.statutJuridique)}</div>
            </div>
            <div className="detail">
              <div className="detail-title">Région</div>
              <div className="detail-text">{structure.region}</div>
            </div>
            <div className="detail">
              <div className="detail-title">Dép.</div>
              <div className="detail-text">{structure.department}</div>
            </div>
            <div className="detail">
              <div className="detail-title">Ville</div>
              <div className="detail-text">{structure.city}</div>
            </div>
            <div className="detail">
              <div className="detail-title">Adresse</div>
              <div className="detail-text">{structure.address}</div>
            </div>
            <div className="detail">
              <div className="detail-title">Siret</div>
              <div className="detail-text">{structure.siret}</div>
            </div>
            {/* todo tete de reseau */}
          </Wrapper>
        </Col>
        <Col md={6}>{/* <Row style={{ borderBottom: "2px solid #f4f5f7" }}></Row>
          <Row></Row> */}</Col>
      </Row>
    </Box>
  );
};

const Wrapper = styled.div`
  padding: 3rem;
  .detail {
    display: flex;
    align-items: flex-start;
    font-size: 1rem;
    text-align: left;
    margin-top: 1rem;
    &-title {
      min-width: 90px;
      width: 90px;
      margin-right: 1rem;
      color: #798399;
    }
    &-text {
      color: rgba(26, 32, 44);
    }
  }
`;

const Header = styled.div`
  padding: 0 25px 0;
  display: flex;
  margin-top: 25px;
  align-items: flex-start;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  > label {
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: #6a6f85;
    display: block;
    margin-bottom: 10px;
    > span {
      color: red;
      font-size: 10px;
      margin-right: 5px;
    }
  }
  select,
  textarea,
  input {
    display: block;
    width: 100%;
    background-color: #fff;
    color: #606266;
    border: 0;
    outline: 0;
    padding: 11px 20px;
    border-radius: 6px;
    margin-right: 15px;
    border: 1px solid #dcdfe6;
    ::placeholder {
      color: #d6d6e1;
    }
    :focus {
      border: 1px solid #aaa;
    }
  }
`;

const Subtitle = styled.div`
  color: rgb(113, 128, 150);
  font-weight: 300;
  font-size: 1rem;
`;

const SubtitleLink = styled(Subtitle)`
  color: #5245cc;
`;

const Title = styled.div`
  color: rgb(38, 42, 62);
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
  flex: 1;
`;

const Legend = styled.div`
  color: rgb(38, 42, 62);
  margin-bottom: 20px;
  font-size: 1.3rem;
  font-weight: 500;
`;

const ButtonLight = styled.button`
  background-color: #fff;
  border: 1px solid #dcdfe6;
  outline: 0;
  align-self: flex-start;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  width: 120px;
  color: #646b7d;
  cursor: pointer;
  margin-right: 10px;
  :hover {
    color: rgb(49, 130, 206);
    border-color: rgb(193, 218, 240);
    background-color: rgb(234, 243, 250);
  }
`;
const Button = styled.button`
  background-color: #3182ce;
  outline: 0;
  border: 0;
  color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: #5a9bd8;
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  button {
    background-color: #5245cc;
    color: #fff;
    &.white-button {
      color: #000;
      background-color: #fff;
      :hover {
        background: #ddd;
      }
    }
    margin-left: 1rem;
    border: none;
    border-radius: 5px;
    padding: 7px 30px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    :hover {
      background: #372f78;
    }
  }
`;

const Box = styled.div`
  width: ${(props) => props.width || 100}%;
  height: 100%;
  background-color: #fff;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.05));
  margin-bottom: 33px;
  border-radius: 8px;
`;
