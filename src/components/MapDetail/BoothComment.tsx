import { styled } from 'styled-components';
import useFetchBoothComment from '../../hooks/useFetchBoothComment';
import BoothComment from '../../types/BoothComment';
import CommentSend from './CommentSend';

const CommentTop = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 1rem;

    svg{
        margin-right: 1rem;
    }
    div{
      margin-left:10px;
    }
`;
const CommentBox = styled.div`
    padding: 3rem;

    p{
        padding-left: 34px;
        font-weight: 400;
    }

    h3{
        color: #969FA9;
        font-size: 1.4rem;
    }

    div{
        color: #BBC7D3;
        font-size: 1.4rem;
    }
`;
const NoCommentBox = styled.div`
    height: 300px; /* 일정 높이 설정 */
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default function BoothComment({ boothId }: string) {
  const boothComments = useFetchBoothComment(boothId);

  if (boothComments.length === 0) {
    return (
      <>
        <NoCommentBox>
          실시간 부스에 대한 정보와 여러분의 감상을 남겨주세요 !
        </NoCommentBox>
        <CommentSend boothId={boothId} />
      </>
    );
  }
  return (
    <>
      {boothComments.map((
        boothCommentDetail:
        { userId: string; content:string; createdAt:string; emoji : string;},
      ) => {
        const {
          userId, content, createdAt, emoji,
        } = boothCommentDetail;
        const createdAtDate = new Date(createdAt);

        const formattedDateTime = createdAtDate.toLocaleString(undefined, {
          dateStyle: 'short',
          timeStyle: 'short',
        });
        return (
          <CommentBox key={userId}>
            <CommentTop>
              <img src={`${emoji}.svg`} alt="이모지" />
              <h3>{userId}</h3>
              <div>{formattedDateTime}</div>
            </CommentTop>
            <p>{content}</p>
          </CommentBox>
        );
      })}
      <CommentSend boothId={boothId} />
    </>
  );
}
