import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithNaem } from "../../molecules/user/UserIconWithNaem";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithNaem image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-alight: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow: break-ward;
    word-break: break-all;
  }
`;
