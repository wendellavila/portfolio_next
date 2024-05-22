import { MutableRefObject, useEffect, useState } from 'react';

/**
 * A hook that returns the current width and height of a DOM node.
 * @param {MutableRefObject<HTMLElement | null>} ref - A reference to a DOM node.
 * @param {number} threshold - The minimum difference in height or width (in pixels) to trigger an update.
 * This is used to avoid multiple rerenders while the window is still being resized. Defaults to 0px.
 * @returns {[number, number]} An array containing the current width in the first position and the current
 * height in the second position.
 */
export function useRefDimensions(ref: MutableRefObject<HTMLElement | null>, threshold = 0) {
  const [refDimensions, setRefDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      //When component size changes
      const newDimensions = {
        width: ref.current ? ref.current.offsetWidth : refDimensions.width,
        height: ref.current ? ref.current.offsetHeight : refDimensions.height,
      };

      const widthChanged = Math.abs(refDimensions.width - newDimensions.width) > threshold;
      const heightChanged = Math.abs(refDimensions.height - newDimensions.height) > threshold;
      if (widthChanged || heightChanged) {
        setRefDimensions(newDimensions);
      }
    });

    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect(); // clean up
  }, [ref, threshold, setRefDimensions]);
  return [refDimensions.width, refDimensions.height];
}

/**
 * A hook that returns the current width and height of the window/viewport.
 * @param {number} threshold - The minimum difference in height or width (in pixels) to trigger an update.
 * This is used to avoid multiple rerenders while the window is still being resized. Defaults to 0px.
 * @returns {[number, number]} An array containing the current width in the first position and the current
 * height in the second position.
 */
export function useScreenDimensions(threshold = 0) {
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });


  function getDimensions() {
    const hasWindow = typeof window !== 'undefined';
    return {
      width: hasWindow ? window.innerWidth : screenDimensions.width,
      height: hasWindow ? window.innerHeight : screenDimensions.height,
    };
  }

  function updateDimensions() {
    const newDimensions = getDimensions();
    const widthChanged = Math.abs(screenDimensions.width - newDimensions.width) > threshold;
    const heightChanged = Math.abs(screenDimensions.height - newDimensions.height) > threshold;
    if (widthChanged || heightChanged) {
      setScreenDimensions(newDimensions);
    }
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions); // clean up
  }, [threshold, updateDimensions]);

  return [screenDimensions.width, screenDimensions.height];
}