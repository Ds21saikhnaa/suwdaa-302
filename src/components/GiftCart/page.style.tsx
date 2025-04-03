// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const ContainerWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .toggle-btn {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #ff7eb3, #ff65a3);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .toggle-btn:hover {
    background: linear-gradient(135deg, #ff65a3, #ff7eb3);
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  .countdown-title {
    font-size: 1.8rem;
    color: #ff7eb3; /* Bright pink */
    text-shadow: 1px 1px 3px rgba(255, 126, 179, 0.5);
    margin-bottom: 10px;
  }

  .inactive-message {
    font-size: 1.2rem;
    color: #ff7eb3;
    text-align: center;
  }
  .countdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    text-align: center;

    .countdown-timer {
      display: flex;
      align-items: center;
      gap: 10px;

      .time-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #ff7eb3, #ff65a3);
        color: white;
        padding: 15px;
        border-radius: 10px;
        width: 80px;
        height: 80px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-weight: bold;
        font-size: 1.5rem;
        transition: transform 0.2s ease;

        &:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .time-label {
          font-size: 0.8rem;
          color: #ffe0f7;
          margin-top: 5px;
        }
      }

      .separator {
        font-size: 2rem;
        color: #ff69b4; /* Bright pink separator */
        margin: 0 5px;
      }
    }
  }
  /* Modal overlay */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  /* Modal content */
  .modal-content {
    background: pink;
    border-radius: 10px; /* Rounded corners */
    padding: 20px; /* Inner padding */
    width: 90%; /* Responsive width */
    max-width: 500px; /* Maximum width */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Slight shadow */
    position: relative;
  }

  /* Close button */
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent; /* No background */
    border: none; /* Remove border */
    font-size: 20px; /* Larger font */
    cursor: pointer; /* Pointer cursor */
    color: white; /* Dark color */
  }

  .close-btn:hover {
    color: #ff4b5c; /* Hover effect */
  }

  /* Animation (optional) */
  .modal-content {
    animation: fadeIn 0.3s ease-out;
    font-size: 12px;
    color: white; /* Bright pink */
    text-shadow: 1px 1px 3px rgba(255, 126, 179, 0.5);
    margin-bottom: 10px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const SecretCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #ff69b4;
  padding: 20px;
  background: #f7f7f7;
  border: 2px dashed #aaa;
  border-radius: 12px;
  width: 300px;
  margin: 20px auto;
`;

export const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  color: #ff69b4;
  &:hover {
    background-color: #e8f5e9;
  }
`;

export const RevealCircle = styled.div<{ revealed: string }>`
  width: 50px;
  height: 50px;
  background: ${({ revealed }) => revealed};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
