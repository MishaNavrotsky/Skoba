/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        const copyToClipboard = str => {
            const el = document.createElement('textarea'); // Create a <textarea> element
            el.value = str; // Set its value to the string that you want copied
            el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
            el.style.position = 'absolute';
            el.style.left = '-9999px'; // Move outside the screen to make it invisible
            document.body.appendChild(el); // Append the <textarea> element to the HTML document
            const selected =
                document.getSelection().rangeCount > 0 // Check if there is any content selected previously
                ?
                document.getSelection().getRangeAt(0) // Store selection if found
                :
                false; // Mark as false to know no selection existed before
            el.select(); // Select the <textarea> content
            document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
            document.body.removeChild(el); // Remove the <textarea> element
            if (selected) { // If a selection existed before copying
                document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
                document.getSelection().addRange(selected); // Restore the original selection
            }
        };

        let dictionary = {
            "0": "][  ",
            "1": "| []",
            "2": "|]|[",
            "3": "[]| ",
            "4": "|[||",
            "5": "]| ]",
            "6": "]]] ",
            "7": "||[]",
            "8": "[ ] ",
            "9": "]||]",
            " ": "[[[[",
            ")": "[]][",
            "^": "[[[]",
            "&": "][[]",
            "_": "][]]",
            "(": "[][]",
            "-": "]|[[",
            "=": "[[[|",
            "?": "][[[",
            ":": "[][ ",
            "%": "]]]|",
            ";": "[[|[",
            "№": "[|[[",
            "!": " []]",
            "'": "| ]]",
            "\"": "[[][",
            "\\": "[] ]",
            ",": "|[[[",
            ".": "][ [",
            "*": "][][",
            "#": "[[]]",
            "@": "|[[ ",
            "~": "[] [",
            "`": "[[ [",
            "$": "[[[ ",
            "\n": "[[  ",
            "[": " [[[",
            "]": "|]]]",
            "|": "[|[]",
            "+": "[|| ",
            "а": "[|][",
            "б": "|[[]",
            "в": "][] ",
            "г": "][|[",
            "д": "[[ ]",
            "е": "|][[",
            "ё": "[]]]",
            "ж": "[]] ",
            "з": "[[ |",
            "и": "|][]",
            "й": "]][[",
            "к": "]]][",
            "л": "[  [",
            "м": "| [[",
            "н": "[[] ",
            "о": "][ ]",
            "п": " ]]]",
            "р": "] []",
            "с": "[ ]|",
            "т": "[[||",
            "у": "] [|",
            "ф": "]]]]",
            "х": "][]|",
            "ц": "[[|]",
            "ч": "[ []",
            "ш": "|[][",
            "щ": "|]][",
            "ъ": "]] [",
            "ы": "][[|",
            "ь": " [[|",
            "э": "]||[",
            "ю": "[[]|",
            "я": " ][[",
            "А": "]|][",
            "Б": "|[|[",
            "В": "] [[",
            "Г": "[ ]]",
            "Д": "[][|",
            "Е": "][[ ",
            "Ё": " ][]",
            "Ж": "] ][",
            "З": " [[ ",
            "И": " [][",
            "Й": "[]|[",
            "К": "] ]]",
            "Л": "]|[ ",
            "М": " [[]",
            "Н": "[|]|",
            "О": " [|[",
            "П": "[]]|",
            "Р": "[ [|",
            "С": "] |[",
            "Т": " ]][",
            "У": "[|]]",
            "Ф": " ] ]",
            "Х": "|[]]",
            "Ц": "| ] ",
            "Ч": "  ][",
            "Ш": " |[ ",
            "Щ": "]|[|",
            "Ъ": "|[ [",
            "Ы": " ]|[",
            "Ь": "[|[ ",
            "Э": "  [[",
            "Ю": "]]|]",
            "Я": "]][ ",
            "a": " [ [",
            "b": "[ |[",
            "c": "][ |",
            "d": " ][ ",
            "e": "[|[|",
            "f": "[ ][",
            "g": "]]|[",
            "h": " |[[",
            "i": "]|]]",
            "j": "[]|]",
            "k": "|][|",
            "l": "]] ]",
            "m": "|  [",
            "n": "||][",
            "o": "]][|",
            "p": "] [ ",
            "q": "[| [",
            "r": " [ ]",
            "s": "  ]]",
            "t": "]| [",
            "u": " [] ",
            "v": "[| ]",
            "w": "[] |",
            "x": "][|]",
            "y": "]|[]",
            "z": "][||",
            "A": " ] [",
            "B": "[ [ ",
            "C": "|[[|",
            "D": "[|] ",
            "E": "|]|]",
            "F": "[]  ",
            "G": "[[| ",
            "H": "|[ ]",
            "I": "| ]|",
            "J": "[||]",
            "K": "[||[",
            "L": " ][|",
            "M": "|[|]",
            "N": " ]] ",
            "O": "|] ]",
            "P": "|]] ",
            "Q": "] ]|",
            "R": "|[] ",
            "S": "[   ",
            "T": "|[]|",
            "U": " |][",
            "V": "|][ ",
            "W": "] ] ",
            "X": "[ |]",
            "Y": "[]||",
            "Z": " | [",
            "/": "| ]["
        }; //generateDictionary();
        let dicCode = "[| ]";
        let length = 4;

        function encode(text) {
            let enStr = "";
            for (let i = 0; i < text.length; i++) {
                enStr += dictionary[text[i]];
            }
            return enStr;
        }

        function decode(text, length) {
            let result = "";
            for (let i = 0; i < text.length; i += length) {
                let str = "";
                for (let j = 0; j < length; j++) {
                    str += text[i + j];
                }
                for (let k in dictionary) {
                    if (dictionary[k] === str) {
                        result += k;
                        break;
                    }
                }
            }
            return result;
        }

        function generateDictionary(letters = " )^&_(-=?:%;№!\'\"\\,.*#@~`$%\n[]|+-абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/", code = "[| ]", length = 4, chances = {
            "[": 0.4,
            "]": 0.4,
            " ": 0.1,
            "|": 0.1
        }) {
            window.dicCode = code;
            window.length = length;
            window.letters = letters;
            let obj = {};
            let n = Math.ceil(Math.log(letters.length) / Math.log(code.length));
            if (n > length) throw "Количество возможных вариантов кодов меньше чем количество букв";

            function addZeros(str, n) {
                let nstr = str;
                for (let i = 0; i < n - str.length; i++)
                    nstr = "0" + nstr;
                return nstr;
            }

            // {sym:0.1}
            function returnRandomSymbol(obj) {
                let sym = Object.keys(obj)[0];
                for (let i in obj) {
                    if (obj[i] > obj[sym]) sym = i;
                    if (~~(Math.random() * 100) / 100 <= obj[i]) {
                        return i;
                    }
                }
                return sym;
            }
            let usedCodes = [];
            for (let i = 0; i < letters.length; i++) {
                // let indexes = addZeros(i.toString(code.length), length);
                let str = "";


                while (true) {
                    for (let j = 0; j < length; j++) {
                        str += returnRandomSymbol(chances);
                    }
                    if (usedCodes.includes(str)) {
                        str = "";
                    } else {
                        usedCodes.push(str);
                        break;
                    }
                }



                // for (let j = 0; j < indexes.length; j++) {
                //     // str
                //     // str += code[parseInt(indexes[j])];
                // }
                obj[letters[i]] = str;
            }
            return obj;
        }


        const dataInput = document.getElementById("dataInput"),
            dataOutput = document.getElementById("dataOutput"),
            popup = document.getElementById("popup");

        dataOutput.addEventListener("click", () => {
            copyToClipboard(dataOutput.value)
            popup.style.display = "block";
            setTimeout(() => {
                popup.style.display = "none";
            }, 1000)
        })
        dataInput.addEventListener("dblclick", () => {
            dataInput.value = "";
            dataOutput.value = "";
        })
        dataInput.addEventListener("input", () => {
            let isSkoba = dataInput.value[0] === "[" && dataInput.value[dataInput.value.length - 1] === "]";
            for (let i = 0; i < dataInput.value.length; i++) {
                if (!dicCode.includes(dataInput.value[i])) isSkoba = false;
            }

            try {
                if (!isSkoba) {
                    if (dataInput.value.length > 0)
                        dataOutput.value = "[" + encode(dataInput.value) + "]";
                    else
                        dataOutput.value = "";
                } else {
                    dataOutput.value = decode(dataInput.value.substring(1, dataInput.value.length - 1), length);
                }
            } catch (e) {
                dataOutput.value = "Error";

            }
        })




    }
};