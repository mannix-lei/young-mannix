
declare module 'react-canvas-nest' {
    import { FC, CSSProperties } from 'react';
    const Component: FC<{
        className?: string;
        config?: {
            count?: number;
            pointR?: number;
            pointColor?: string;
            pointOpacity?: number;
            dist?: number;
            lineColor?: string;
            lineWidth?: number;
            follow?: boolean;
            mouseDist?: number;
        }
        style?: CSSProperties;
    }>;
    export default Component;
}
