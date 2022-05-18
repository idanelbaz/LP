import { useCallback, useEffect } from 'react';

interface useClickOutsideListenerProps {
  onClickOutside: any,
  ref: any,
  refToIgnore?: any
}

const useClickOutsideListener = ({ onClickOutside, ref, refToIgnore }: useClickOutsideListenerProps) => {
  const onClickOutsideHandler = useCallback(
    (event: any) => {
      if (
        ref
        && ref.current
        && onClickOutside
        && !ref.current.contains(event.target)
      ) {
        if (refToIgnore?.current?.contains(event.target)) {
          return;
        }
        onClickOutside(event);
      }
    },
    [onClickOutside, ref, refToIgnore]
  );
  useEffect(() => {
    document.addEventListener('mouseup', onClickOutsideHandler);
    return () => document.removeEventListener('mouseup', onClickOutsideHandler);
  }, [onClickOutsideHandler]);
};

export default useClickOutsideListener;
