class StudentrecsController < ApplicationController
  # GET /studentrecs
  # GET /studentrecs.json
  def index
    @studentrecs = Studentrec.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @studentrecs }
    end
  end

  # GET /studentrecs/1
  # GET /studentrecs/1.json
  def show
    @studentrec = Studentrec.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @studentrec }
    end
  end

  # GET /studentrecs/new
  # GET /studentrecs/new.json
  def new
    @studentrec = Studentrec.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @studentrec }
    end
  end

  # GET /studentrecs/1/edit
  def edit
    @studentrec = Studentrec.find(params[:id])
  end

  # POST /studentrecs
  # POST /studentrecs.json
  def create
    @studentrec = Studentrec.new(params[:studentrec])

    respond_to do |format|
      if @studentrec.save
        format.html { redirect_to @studentrec, notice: 'Studentrec was successfully created.' }
        format.json { render json: @studentrec, status: :created, location: @studentrec }
      else
        format.html { render action: "new" }
        format.json { render json: @studentrec.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /studentrecs/1
  # PUT /studentrecs/1.json
  def update
    @studentrec = Studentrec.find(params[:id])

    respond_to do |format|
      if @studentrec.update_attributes(params[:studentrec])
        format.html { redirect_to @studentrec, notice: 'Studentrec was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @studentrec.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /studentrecs/1
  # DELETE /studentrecs/1.json
  def destroy
    @studentrec = Studentrec.find(params[:id])
    @studentrec.destroy

    respond_to do |format|
      format.html { redirect_to studentrecs_url }
      format.json { head :no_content }
    end
  end
end
