
const theme = {
    color: {
        bgBlue: '#2c6ed5'
    }
}

const checkStyle = (style, key, breakpointNo, objStyle) => {
    if (style) {
        if (Array.isArray(style) && style[breakpointNo]) {
            objStyle[key] = style[breakpointNo];
        }
        else {
            objStyle[key] = style
        }
    }
    return objStyle;
}

export const getStyle = ({ flexDirection, flex, width, height, pr, pl, pt, pb, px, py, mt, mb, mr, ml, mx, my, alignItems, justifyContent, bg }, breakpointNo, isFlex) => {
    let objStyle = {
        boxSizing: 'border-box'
    };
    if (isFlex)
        objStyle.display = 'flex';
    objStyle = checkStyle(flexDirection, 'flexDirection', breakpointNo, objStyle);
    objStyle = checkStyle(flex, 'flex', breakpointNo, objStyle);
    objStyle = checkStyle(width, 'width', breakpointNo, objStyle);
    objStyle = checkStyle(height, 'height', breakpointNo, objStyle);
    objStyle = checkStyle(pr, 'paddingRight', breakpointNo, objStyle);
    objStyle = checkStyle(pl, 'paddingLeft', breakpointNo, objStyle);
    objStyle = checkStyle(pt, 'paddingTop', breakpointNo, objStyle);
    objStyle = checkStyle(pb, 'paddingBottom', breakpointNo, objStyle);
    if (px) {
        objStyle = checkStyle(px, 'paddingRight', breakpointNo, objStyle);
        objStyle = checkStyle(px, 'paddingLeft', breakpointNo, objStyle);
    }
    if (py) {
        objStyle = checkStyle(py, 'paddingTop', breakpointNo, objStyle);
        objStyle = checkStyle(py, 'paddingTop', breakpointNo, objStyle);
    }
    objStyle = checkStyle(mr, 'marginRight', breakpointNo, objStyle);
    objStyle = checkStyle(ml, 'marginLeft', breakpointNo, objStyle);
    if (mx) {
        objStyle = checkStyle(mx, 'marginRight', breakpointNo, objStyle);
        objStyle = checkStyle(mx, 'marginLeft', breakpointNo, objStyle);
    }
    objStyle = checkStyle(mt, 'marginTop', breakpointNo, objStyle);
    objStyle = checkStyle(mb, 'marginBottom', breakpointNo, objStyle);
    if (my) {
        objStyle = checkStyle(my, 'marginTop', breakpointNo, objStyle);
        objStyle = checkStyle(my, 'marginBottom', breakpointNo, objStyle);
    }
    objStyle = checkStyle(alignItems, 'alignItems', breakpointNo, objStyle);
    objStyle = checkStyle(justifyContent, 'justifyContent', breakpointNo, objStyle);
    if (bg) {
        const color = theme.color[bg] || bg;
        objStyle = checkStyle(color, 'backgroundColor', breakpointNo, objStyle);
    }
    return objStyle;
}

