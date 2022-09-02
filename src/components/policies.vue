<template>
    <div>
        <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-12">
                    <div class="bg-light rounded h-100 p-4">
                        <h6 class="mb-4" style="
                font-size: x-large;
                font-weight: bolder;
                background-color: #0dcaf0;
                text-align: center;
              ">
                            Add Policies
                        </h6>
                        <!-- <div class="table-responsive components-app"> -->
                        <div class="row">
                            <div class="col-10"></div>
                            <div class="col-2">
                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#myModal">
                                    Add Policy
                                </button>
                            </div>


                            <!-- The Modal -->
                            <div class="modal" id="myModal">

                                <form id="formfill">
                                    <h3>Add Policy</h3>
                                    <!-- Details -->
                                    <div class="form-control">
                                        <label for="name" id="label-name">
                                            Type
                                        </label>

                                        <!-- Input Type Text -->
                                        <input type="text" id="name" placeholder="Enter policy type" />
                                    </div>

                                    <div class="form-control">
                                        <label for="email" id="label-email">
                                            Price
                                        </label>

                                        <!-- Input Type Email-->
                                        <input type="text" id="email" placeholder="Enter Policy price" />
                                    </div>

                                    <div class="form-control">
                                        <label for="age" id="label-age">
                                            Plan
                                        </label>

                                        <!-- Input Type Text -->
                                        <label for="inp-1">
                                            <input type="checkbox" name="inp" /> Monthly</label>
                                        <label for="inp-2">
                                            <input type="checkbox" name="inp" /> Yearly</label>
                                    </div>
                                    <!-- Multi-line Text Input Control -->
                                    <button type="submit" value="submit">
                                        Add
                                    </button>
                                </form>
                            </div>

                        </div>
                        <!-- </div> -->
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
    name: "PolicyData",
    data() {
        return {
            isExits: false,
            user: [],
        };
    },

};
</script>

<style>
 
    /* Styling the Form (Color, Padding, Shadow) */
    #formfill {
        background-color: #fff;
        max-width: 500px;
        margin: 50px auto;
        padding: 30px 20px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
    }

    /* Styling form-control Class */
    .form-control {
        text-align: left;
        margin-bottom: 25px;
    }

    /* Styling form-control Label */
    .form-control label {
        display: block;
        margin-bottom: 10px;
    }

    /* Styling form-control input,
    select, textarea */
    .form-control input,
    .form-control select,
    .form-control textarea {
        border: 1px solid #777;
        border-radius: 2px;
        font-family: inherit;
        padding: 10px;
        display: block;
        width: 95%;
    }

    /* Styling form-control Radio
    button and Checkbox */
    .form-control input[type="checkbox"] {
        display: inline-block;
        width: auto;
    }

    /* Styling Button */
    button {
        background-color: #05c46b;
        border: 1px solid #777;
        border-radius: 2px;
        font-family: inherit;
        font-size: 21px;
        display: block;
        width: 100%;
        margin-top: 50px;
        margin-bottom: 20px;
    }
    
</style>