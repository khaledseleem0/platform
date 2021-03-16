export let addpost = (content, src) => {
    return {
        type: "ADD_POST",
        content,
        src
    }
}