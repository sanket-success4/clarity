/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<pre>
    <code clr-code-highlight="language-css">
        .some-component {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
    </code>
</pre>
`;

@Component({
    selector: "clr-code-highlight-snippet-demo",
    templateUrl: "./code-highlight-snippet.html",
})
export class CodeHighlightSnippetDemo {
    htmlExample = HTML_EXAMPLE;
}
