import { Field } from 'formik';
import styled from 'styled-components';

export const WrapperModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  max-width: 566px;
  min-height: 506px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 64px;
  @media (max-width: 482px) {
    padding: 30px;
  }
`;

export const WrapperModalTrail = styled.div`
  position: fixed;
  top: ${props => (props.top === '0' ? '0' : '50%')};
  left: 50%;
  z-index: 2;
  transform: translate(-50%, ${props => (props.top === '0' ? '0' : '-50%')});
  max-width: 600px;

  background-color: #ffffff;
  border-radius: 30px;
  padding: 64px;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 5px;
  }

  @media (max-width: 482px) {
    padding: 30px;
    border-radius: 12px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: #121417;
  background: transparent;
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const ModalText = styled.p`
  font-size: 16px;

  margin-bottom: 40px;
  color: #121417cc;
  letter-spacing: 1.4;
`;

export const ModalTextTrail = styled.p`
  font-size: 16px;

  margin-bottom: 20px;
  color: #121417cc;
  letter-spacing: 1.4;
`;

export const YourTeacherBlock = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const YourTeacherImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const YourTeacher = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 4px;
  line-height: 1.33;
`;

export const YourTeacherNane = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;

export const TitleOfRadioBtns = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const GreenRadio = styled(Field)`
  display: none;
`;

export const LabelRadio = styled.label`
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-weight: 400;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid #8a8a89;
    border-radius: 50%;
    margin-right: 8px;
    display: inline-block;
  }
`;

export const CheckBoxActiveWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid #f4c550;
  border-radius: 50%;
  background: #ffffff;
`;

export const CheckBoxActive = styled.div`
  width: 10px;
  height: 10px;
  background: #f4c550;
  border-radius: 50%;
`;
