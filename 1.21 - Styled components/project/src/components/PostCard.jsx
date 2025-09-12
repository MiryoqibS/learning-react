import styled from "styled-components";

const Card = styled.div`
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    padding: 20px;
    border-radius: 12px;
    margin: 16px 0;
`;

export const PostCard = ({ title, content }) => {
    return (
        <Card>
            <h2>{title}</h2>
            <p>{content}</p>
        </Card>
    )
};