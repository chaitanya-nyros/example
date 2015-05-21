require 'test_helper'

class StudentrecsControllerTest < ActionController::TestCase
  setup do
    @studentrec = studentrecs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:studentrecs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create studentrec" do
    assert_difference('Studentrec.count') do
      post :create, studentrec: {  }
    end

    assert_redirected_to studentrec_path(assigns(:studentrec))
  end

  test "should show studentrec" do
    get :show, id: @studentrec
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @studentrec
    assert_response :success
  end

  test "should update studentrec" do
    put :update, id: @studentrec, studentrec: {  }
    assert_redirected_to studentrec_path(assigns(:studentrec))
  end

  test "should destroy studentrec" do
    assert_difference('Studentrec.count', -1) do
      delete :destroy, id: @studentrec
    end

    assert_redirected_to studentrecs_path
  end
end
