import { useEffect } from "react";
import { OverlayScrollbars } from 'overlayscrollbars';

const config = {};

const useScrollBar = (root, hasScroll) => {

    useEffect(() => {

        let scrollbar;

        if (root.current && hasScroll) {
            scrollbar = OverlayScrollbars(root.current, config);
        }

        return () => {
            if (scrollbar) {
                scrollbar.destroy();
            }
        }
    }, [root, hasScroll]);

}

export { useScrollBar };