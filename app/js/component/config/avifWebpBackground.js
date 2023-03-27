export default function() {
    function htmlClass(attr) {
        document.documentElement.classList.add(attr);
    }
    
    const avif = new Image();
    avif.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
    avif.onload = function () {
        htmlClass("avif");
    };
    
    avif.onerror = function () {
        checkWebp(function(isWebp) {
            if (isWebp) {
                htmlClass("webp");
                return
            }

            htmlClass("jpng");
        });
    };

    function checkWebp(cbFn) {
        var img = new Image();
        img.onload = function () {
            var result = img.width > 0 && img.height > 0;
            cbFn(result);
        };
        img.onerror = function () {
            cbFn(false);
        };
        img.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
    }
}