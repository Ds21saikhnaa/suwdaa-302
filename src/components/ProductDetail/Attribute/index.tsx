// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

interface Attr {
  name: string;
  value: string;
}

interface prop {
  attributes: Attr[] | [];
}
export const Attribute = ({ attributes = [] }: prop) => {
  if (!attributes.length) return null;
  return (
    <AttributeStyle>
      <ul className="col">
        {attributes.map((el, ind) => (
          <li className="line" key={ind}>
            <span className="named">{el.name}: </span>
            <span className="valued">{el.value}</span>
          </li>
        ))}
      </ul>
    </AttributeStyle>
  );
};

const AttributeStyle = styled.div`
  margin-bottom: 17px;
  .col {
    display: inline-block;
    vertical-align: top;
    padding: 0;
    box-sizing: border-box;
    margin-top: 15px;
    width: 870px;
    columns: 2;
    @media (max-width: 992px) {
      width: 100%;
      columns: 1;
    }
    .line {
      padding: 10px 0;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      break-inside: avoid;
      margin-right: 10px;
      gap: 10px;
      list-style-type: none;
      .named {
        font-size: 15px;
        color: #666;
        display: inline;
        vertical-align: top;
        padding-right: 5px;
      }
      .valued {
        font-weight: 500;
        font-size: 16px;
        color: #000;
      }
    }
  }
`;
