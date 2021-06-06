import styled from "styled-components";

export const BaseButton = styled.button`
  &.btn {
    padding: 0.875rem 1.5rem;
  }
  &.btn-sm {
    padding: 0.625rem 1.25rem;
  }
`;
export const PrimaryButton = styled(BaseButton)`
  &.btn-primary {
    background-color: var(--primary) !important;
    border-color: var(--primary);
  }

  &.btn-primary:hover {
    background-color: var(--primary);
    background-color: var(--primary);
    opacity: 0.8;
  }
`;

export const PrimaryButton2 = styled.button`
  &.btn {
    padding: 0.875rem 1.5rem;
  }

  &.btn-primary {
    background-color: var(--primary) !important;
    border-color: var(--primary);
  }

  &.btn-primary:hover {
    background-color: var(--primary);
    background-color: var(--primary);
    opacity: 0.8;
  }

  &.btn-sm {
    padding: 0.625rem 1.25rem;
  }
`;
