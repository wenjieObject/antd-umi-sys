/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const { title, titleText } = props;

    return {
        text: titleText,
        ...title
    };
};